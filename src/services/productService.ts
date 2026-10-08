import type { Product, ProductsResponse } from '../types/product'

const PRODUCTS_URL = '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL)

  if (!response.ok) {
    throw new Error(`Erro ao buscar produtos: ${response.status}`)
  }

  const data: ProductsResponse = await response.json()
  return data.products
}
