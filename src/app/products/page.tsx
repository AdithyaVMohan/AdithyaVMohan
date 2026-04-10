"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar"
import {
  useTheme,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from "@mui/material";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

export default function ProductList() {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<GridRowId | null>(null);
  const theme = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState("");
  const router = useRouter();

  // Fetch products
  useEffect(() => {
  const token = localStorage.getItem("token")

  if (!token) {
    router.push("/login")
    return
  }

  fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
    .then((res) => res.json())
    .then((data) => setProducts(data))

}, [])
  const handleLogout = () => {
    localStorage.removeItem("token")
    router.push("/login")
  }

  // Open dialog
  const handleOpenDialog = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setTitle(product.title);
      setPrice(product.price);
      setImage(product.images?.[0] ?? "");
    } else {
      setEditingProduct(null);
      setTitle("");
      setPrice(0);
      setImage("");
    }

    setOpenDialog(true);
  };

  const handleCloseDialog = () => setOpenDialog(false);

  // Save product
  const handleSave = () => {
    if (editingProduct) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingProduct.id
            ? { ...p, title, price, images: [image] }
            : p
        )
      );
    } else {
      const newProduct: Product = {
        id: Math.max(...products.map((p) => p.id)) + 1,
        title,
        price,
        images: [image],
      };

      setProducts((prev) => [...prev, newProduct]);
    }

    setOpenDialog(false);
  };

  // Delete
  const handleDelete = (id: GridRowId) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const confirmDelete = () => {
    if (selectedId !== null) {
      setProducts((prev) => prev.filter((p) => p.id !== selectedId));
    }
    setDeleteDialogOpen(false);
    setSelectedId(null);
  };

  // DataGrid columns
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },

    { field: "title", headerName: "Product", flex: 1 },

    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "image",
      headerName: "Image",
      width: 100,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="product"
          width={50}
          style={{ borderRadius: 4 }}
        />
      ),
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Box display="flex" gap={1}>
          <Button
            variant="outlined"
            size="small"
            onClick={() =>
              handleOpenDialog(products.find((p) => p.id === params.id)!)
            }
          >
            Edit
          </Button>

          <Button
            variant="outlined"
            size="small"
            color="error"
            onClick={() => {
              setSelectedId(params.id);
              setDeleteDialogOpen(true);
            }}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  // Convert products to rows
  const rows = products.map((p) => ({
    id: p.id,
    title: p.title,
    price: Number(p.price),
    image: p.images?.[0] ?? "",
  }));

 return (
  <Paper sx={{ padding: 2, marginTop: 2 }}>
    {/* Header */}
     <Navbar />
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      <h2 style={{ color: theme.palette.primary.main }}>Product List</h2>
      <Button variant="contained" onClick={() => router.push("/products/new")}>
        Add Product
      </Button>
    </Box>

    {/* DataGrid */}
    <DataGrid
      rows={rows}
      columns={columns}
      pageSizeOptions={[5, 10]}
      initialState={{
        pagination: { paginationModel: { pageSize: 5, page: 0 } },
      }}
      autoHeight
      disableRowSelectionOnClick
    />

    <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
      <DialogTitle>Delete Product</DialogTitle>

      <DialogContent>
        Are you sure you want to delete this product?
      </DialogContent>

      <DialogActions>
        <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>

        <Button color="error" variant="contained" onClick={confirmDelete}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>

    {/* Edit Dialog */}
    {editingProduct && (
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Edit Product</DialogTitle>

        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            margin="dense"
            label="Price"
            type="number"
            fullWidth
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />

          <TextField
            margin="dense"
            label="Image URL"
            fullWidth
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    )}
  </Paper>
);
}