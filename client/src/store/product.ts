import { createSlice } from '@reduxjs/toolkit'
import { Product } from './interface'

const initialState: Product | null = null

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (_, actions) => actions.payload,
    removeProduct: () => null
  }
})

export const productActions = productSlice.actions
export const productReducer = productSlice.reducer
