import { useQuery } from "@tanstack/react-query";
import { fetchProductBySlug, fetchProducts } from "@/lib/productApi";

export const useProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

export const useProduct = (slug: string) =>
  useQuery({
    queryKey: ["product", slug],
    queryFn: () => fetchProductBySlug(slug),
    enabled: Boolean(slug),
  });
