import { create } from 'zustand'
import ClientSDK from '../services/index.ts'

export type Product = {
  id: string
  _id: { $oid: string }
  name: string
  long_desc: string
  short_desc: string
  price: number
  img1: string
  img2: string
  img3: string
  img4: string
  category: string
}

type ProductState = {
  products: Product[]
  product: Product | null
  loading: boolean
  error: string | null
  getProducts: () => void
  getProduct: (id: string) => void
  clearProduct: () => void
}

const useProductStore = create<ProductState>((set) => ({
  products: [],
  product: null,
  loading: false,
  error: null,
  getProducts: async () => {
    try {
      set({ loading: true, error: null })
      const data = (await ClientSDK.getInstance().getProducts()) as {
        data: Product[]
      }
      set({ products: data.data, loading: false })
    } catch (error) {
      set({ error: (error as Error).message, loading: false })
    }
  },
  getProduct: async (id: string) => {
    set({ product: null})
    try {
      set({ loading: true, error: null })
      const data = (await ClientSDK.getInstance().getProduct(id)) as {
        data: Product
      }
      set({ product: data.data, loading: false })
    } catch (error) {
      set({ error: (error as Error).message, loading: false })
    }
  },
  clearProduct: () => {
    set({ product: null })
  }
}))

export default useProductStore
