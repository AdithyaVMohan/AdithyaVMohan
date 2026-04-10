"use client";

import { useEffect, useState } from "react";
import { Paper, Button, Box, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

type Category = {
  id: number;
  name: string;
  image: string;
};

export default function CategoryPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  // ✅ Direct API call (NO route file)
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // OPEN ADD / EDIT
  const handleOpen = (category?: Category) => {
    if (category) {
      setEditingId(category.id);
      setName(category.name);
      setImage(category.image);
    } else {
      setEditingId(null);
      setName("");
      setImage("");
    }
    setOpen(true);
  };

  const handleSave = async () => {
  try {
    if (editingId) {
      // ✅ UPDATE CATEGORY (PUT request)
      await fetch(`https://api.escuelajs.co/api/v1/categories/${editingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          image,
        }),
      });

      setCategories((prev) =>
        prev.map((c) =>
          c.id === editingId ? { ...c, name, image } : c
        )
      );
    } else {
      // ✅ CREATE CATEGORY (POST request)
      const res = await fetch("https://api.escuelajs.co/api/v1/categories/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          image,
        }),
      });

      const newCategory = await res.json();

      setCategories((prev) => [...prev, newCategory]);
    }

    setOpen(false);
  } catch (error) {
    console.error("Error saving category:", error);
  }
};

  // DELETE (frontend only)
  const handleDelete = (id: number) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <h2>Categories</h2>
        <Button variant="contained" onClick={() => handleOpen()}>
          Add Category
        </Button>
      </Box>

      {categories.map((cat) => (
        <Box
          key={cat.id}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={1}
          borderBottom="1px solid #ddd"
        >
          <Box display="flex" alignItems="center" gap={2}>
            <img src={cat.image} width={50} style={{ borderRadius: 4 }} />
            <span>{cat.name}</span>
          </Box>

          <Box display="flex" gap={1}>
            <Button size="small" onClick={() => handleOpen(cat)}>
              Edit
            </Button>
            <Button size="small" color="error" onClick={() => handleDelete(cat.id)}>
              Delete
            </Button>
          </Box>
        </Box>
      ))}

      {/* Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{editingId ? "Edit Category" : "Add Category"}</DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            label="Name"
            margin="dense"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            fullWidth
            label="Image URL"
            margin="dense"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}