"use client"

import { AppBar, Toolbar, Button } from "@mui/material"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const router = useRouter()

  const logout = () => {
    localStorage.removeItem("token")
    router.push("/")
  }

  return (
    <AppBar position="static">
      <Toolbar>

        <Button color="inherit" onClick={() => router.push("/products")}>
          Products
        </Button>

        <Button color="inherit" onClick={() => router.push("/categories")}>
          Categories
        </Button>

        <Button color="inherit" onClick={logout}>
          Logout
        </Button>

      </Toolbar>
    </AppBar>
  )
}