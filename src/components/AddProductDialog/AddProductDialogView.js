import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

export const AddProductDialogView = ({ open, handleClose, form, onSubmit }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Product</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          {...form.register("name", { required: true })}
          error={form.errors?.name}
          helperText={form.errors?.name ? "This field is required" : ""}
        />

        <TextField
          margin="dense"
          id="price"
          label="Price"
          type="text"
          fullWidth
          variant="standard"
          {...form.register("price", { required: true })}
          error={form.errors?.price}
          helperText={form.errors?.price ? "This field is required" : ""}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={form.handleSubmit(onSubmit)}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};
