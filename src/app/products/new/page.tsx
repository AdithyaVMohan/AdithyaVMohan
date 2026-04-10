"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Paper, Box, TextField, Button, Typography } from "@mui/material";

export default function AddProduct() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState("");

  const handleAdd = () => {
    console.log({ title, price, image });
    alert("Product added!");
    router.push("/product"); 
  };

  return (
    <Paper sx={{ padding: 4, maxWidth: 500, margin: "2rem auto" }}>
      <Typography variant="h5" mb={2}>
        Add Product
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth />
        <TextField label="Price" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} fullWidth />
        <TextField label="Image URL" value={image} onChange={(e) => setImage(e.target.value)} fullWidth />
        <Box display="flex" gap={2} mt={2}>
          <Button variant="contained" onClick={handleAdd}>
            Add Product
          </Button>
          <Button variant="outlined" onClick={() => router.push("/products")}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}