"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button, TextField, Container } from "@mui/material"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json()

    if (res.ok) {
      localStorage.setItem("token", data.token)
      router.push("/products")
    } else {
      alert(data.message)
    }
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
       <h1>Login</h1>
      <TextField
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        fullWidth
        onClick={() => {
          console.log("BUTTON CLICKED")
          handleLogin()
        }}
      >
        Login
      </Button>
    </Container>
  )
}