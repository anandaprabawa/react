import { Button } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AddProductDialogView } from "./AddProductDialogView";
import { usePostProduct } from "./usePostProduct";

export const AddProductDialog = () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const onCloseDialog = () => setOpen(false);

  const productMutation = usePostProduct();

  const form = useForm();
  const onSubmit = (data) => {
    productMutation.mutate(data, {
      onSuccess: () => onCloseDialog(),
    });
  };

  return (
    <>
      <Button onClick={openDialog}>Add Product</Button>
      <AddProductDialogView
        open={open}
        handleClose={onCloseDialog}
        form={form}
        onSubmit={onSubmit}
      ></AddProductDialogView>
    </>
  );
};
