import { TableView } from "./TableView";
import { useProducts } from "./useProducts";

export const Table = () => {
  const { data } = useProducts();

  return <TableView products={data || []} />;
};
