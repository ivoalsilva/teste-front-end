import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { getProducts } from "../services/productService";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setError("Não foi possível carregar os produtos."))
      .finally(() => setIsLoading(false));
  }, []);

  return { products, isLoading, error };
}
