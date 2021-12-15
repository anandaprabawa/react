import { useMutation } from "react-query";

export function usePostProduct() {
  const addProduct = async (product) => {
    const res = await fetch("/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    return res.json();
  };

  return useMutation(addProduct);
}
