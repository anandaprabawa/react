import { AddProductDialog } from "../components/AddProductDialog/AddProductDialog";
import { Table } from "../components/Table/Table";

export const HomePage = () => {
  return (
    <div>
      <AddProductDialog></AddProductDialog>
      <Table></Table>
    </div>
  );
};
