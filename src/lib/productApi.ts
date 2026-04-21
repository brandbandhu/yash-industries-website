import { products as fallbackProducts } from "@/data/products";
import { resolveLegacyImage } from "@/data/legacyMedia";
import type { Product, ProductFormValues, SiteGalleryFormValues, SiteGalleryItem } from "@/types/product";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3001";
const ADMIN_TOKEN_KEY = "yash_admin_token";

const isObject = (value: unknown): value is Record<string, unknown> => typeof value === "object" && value !== null;

const parseProduct = (product: Product): Product => ({
  ...product,
  image: resolveLegacyImage(product.image),
  galleryImages:
    product.galleryImages?.length > 0
      ? product.galleryImages.map(resolveLegacyImage)
      : [resolveLegacyImage(product.image)],
});

const isValidProduct = (value: unknown): value is Product =>
  isObject(value) &&
  typeof value.id === "string" &&
  typeof value.name === "string" &&
  typeof value.slug === "string" &&
  typeof value.shortDescription === "string" &&
  typeof value.description === "string" &&
  typeof value.image === "string" &&
  typeof value.category === "string" &&
  typeof value.material === "string" &&
  typeof value.height === "string" &&
  typeof value.shape === "string" &&
  typeof value.finish === "string" &&
  Array.isArray(value.applications) &&
  Array.isArray(value.customization) &&
  typeof value.moq === "string" &&
  isObject(value.specifications) &&
  Array.isArray(value.galleryImages);

const parseProducts = (products: Product[]) => products.filter(isValidProduct).map(parseProduct);

const extractErrorMessage = async (response: Response, fallbackMessage: string) => {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const data = await response.json().catch(() => null);
    if (data?.message) {
      return data.message;
    }
  }

  const text = await response.text().catch(() => "");

  if (text.trim()) {
    return text.trim();
  }

  return `${fallbackMessage} (HTTP ${response.status})`;
};

const request = async <T>(path: string, options?: RequestInit): Promise<T> => {
  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers ?? {}),
      },
    });
  } catch (_error) {
    throw new Error(`API server is not reachable at ${API_BASE_URL}. Start it with "npm run server".`);
  }

  if (!response.ok) {
    const message = await extractErrorMessage(response, "Request failed");
    throw new Error(message);
  }

  return response.json() as Promise<T>;
};

const getAuthHeaders = () => {
  const token = localStorage.getItem(ADMIN_TOKEN_KEY);

  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
};

export const getAdminToken = () => localStorage.getItem(ADMIN_TOKEN_KEY);

export const setAdminToken = (token: string) => {
  localStorage.setItem(ADMIN_TOKEN_KEY, token);
};

export const clearAdminToken = () => {
  localStorage.removeItem(ADMIN_TOKEN_KEY);
};

export const fetchProducts = async () => {
  try {
    const products = await request<Product[]>("/api/products");
    return parseProducts(products);
  } catch (_error) {
    return fallbackProducts;
  }
};

export const fetchProductBySlug = async (slug: string) => {
  try {
    const product = await request<Product>(`/api/products/${slug}`);
    return parseProduct(product);
  } catch (_error) {
    return fallbackProducts.find((item) => item.slug === slug) ?? null;
  }
};

export const fetchGalleryItems = async () => {
  try {
    return await request<SiteGalleryItem[]>("/api/gallery");
  } catch (_error) {
    return [
      { id: "g1", title: "Manufacturing Floor", description: "Add image here when available.", imageUrl: "", sortOrder: 0 },
      { id: "g2", title: "Welding Line", description: "Add image here when available.", imageUrl: "", sortOrder: 1 },
      { id: "g3", title: "Galvanization Unit", description: "Add image here when available.", imageUrl: "", sortOrder: 2 },
      { id: "g4", title: "Quality Lab", description: "Add image here when available.", imageUrl: "", sortOrder: 3 },
      { id: "g5", title: "Finished Poles", description: "Add image here when available.", imageUrl: "", sortOrder: 4 },
      { id: "g6", title: "Dispatch Area", description: "Add image here when available.", imageUrl: "", sortOrder: 5 },
      { id: "g7", title: "Material Yard", description: "Add image here when available.", imageUrl: "", sortOrder: 6 },
      { id: "g8", title: "Fabrication Bay", description: "Add image here when available.", imageUrl: "", sortOrder: 7 },
      { id: "g9", title: "Warehouse", description: "Add image here when available.", imageUrl: "", sortOrder: 8 },
    ];
  }
};

export const loginAdmin = async (username: string, password: string) => {
  const data = await request<{ token: string; username: string }>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  setAdminToken(data.token);
  return data;
};

export const fetchAdminProducts = async () => {
  const products = await request<Product[]>("/api/admin/products", {
    headers: getAuthHeaders(),
  });
  return parseProducts(products);
};

export const fetchAdminGalleryItems = async () => {
  return request<SiteGalleryItem[]>("/api/admin/gallery", {
    headers: getAuthHeaders(),
  });
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}/api/admin/upload-image`, {
      method: "POST",
      headers: {
        ...getAuthHeaders(),
      },
      body: formData,
    });
  } catch (_error) {
    throw new Error(`Image upload server is not reachable at ${API_BASE_URL}. Start it with "npm run server".`);
  }

  if (!response.ok) {
    const message = await extractErrorMessage(response, "Upload failed");
    throw new Error(message);
  }

  return response.json() as Promise<{ url: string; filename: string }>;
};

export const createProduct = async (payload: ProductFormValues) => {
  const product = await request<Product>("/api/admin/products", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(payload),
  });
  return parseProduct(product);
};

export const updateProduct = async (id: string, payload: ProductFormValues) => {
  const product = await request<Product>(`/api/admin/products/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(payload),
  });
  return parseProduct(product);
};

export const deleteProduct = async (id: string) => {
  return request<{ success: boolean }>(`/api/admin/products/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
};

export const createGalleryItem = async (payload: SiteGalleryFormValues) => {
  return request<SiteGalleryItem>("/api/admin/gallery", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(payload),
  });
};

export const updateGalleryItem = async (id: string, payload: SiteGalleryFormValues) => {
  return request<SiteGalleryItem>(`/api/admin/gallery/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(payload),
  });
};

export const deleteGalleryItem = async (id: string) => {
  return request<{ success: boolean }>(`/api/admin/gallery/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
};
