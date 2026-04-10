import axios from "axios"
import { Product, Category } from "../types/types"

const API = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1"
})

export const getProducts = async (): Promise<Product[]> => {
  const res = await API.get("/products")
  return res.data
}

export const getCategories = async (): Promise<Category[]> => {
  const res = await API.get("/categories")
  return res.data
}

export const deleteProduct = async (id:number) => {
  await API.delete(`/products/${id}`)
}