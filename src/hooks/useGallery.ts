import { useQuery } from "@tanstack/react-query";
import { fetchGalleryItems } from "@/lib/productApi";

export const useGalleryItems = () =>
  useQuery({
    queryKey: ["gallery-items"],
    queryFn: fetchGalleryItems,
  });
