export interface Product {
  _id: {
    $oid: string
  }
  name: string
  quantity: number
  price: number
  img1?: string
  img2?: string
  img3?: string
  img4?: string
  short_desc: string
  category: string
  long_desc: string
}

export type Products = Array<Product>

export interface Cart {
  products: Products
  total: number
}

export type User = {
  fullName: String
  email: String
  phone: String
  password: String
} | null
