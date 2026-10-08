export interface Product {
    productName: string
    descriptionShort: string
    photo: string
    price: number // em centavos
}

export interface ProductsResponse {
    success: boolean
    products: Product[]
}
