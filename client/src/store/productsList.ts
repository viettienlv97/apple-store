import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Products } from './interface'

const initialState: Products = []

const productsListSlice = createSlice({
  name: 'productsList',
  initialState,
  reducers: {
    setProductsList: (_, actions: PayloadAction<Products>) => actions.payload
  }
})

export const productsListActions = productsListSlice.actions
export const productsListReducer = productsListSlice.reducer
