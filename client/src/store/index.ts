import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './cart'
import { productReducer } from './product'
import { productsListReducer } from './productsList'
import { Cart, Product, Products, User } from './interface'

export type State = {
  cart: Cart
  product: Product
  productsList: Products
  auth: { user: User; [key: string]: any }
}

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    productsList: productsListReducer,
  }
})
export type AppDispatch = typeof store.dispatch
export default store
