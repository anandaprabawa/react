import { useQuery } from "react-query";

export function useProducts() {
  const fetchProducts = async () => {
    const res = await fetch("products");
    return res.json();
  };

  return useQuery("products", fetchProducts);
}
