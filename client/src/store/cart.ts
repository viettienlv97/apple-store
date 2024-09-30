import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cart, Product } from './interface'
import { getItem, removeItem, setItem } from '../utils/storage'
import constant from '../utils/constant'

const initialState: Cart = getItem(constant.CART, {
  products: [],
  total: 0
})

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, actions: PayloadAction<Product>) => {
      const product = actions.payload

      state.products.push(product)
      state.total += product.quantity * product.price
      setItem(constant.CART, state)
    },

    updateCart: (state, actions: PayloadAction<Product>) => {
      const payloadProd = actions.payload

      const productInCart = getProductInCart(payloadProd, state)
      if (productInCart) {
        productInCart.quantity += payloadProd.quantity
      }
      state.total += payloadProd.quantity * payloadProd.price
      setItem(constant.CART, state)
    },

    increaseQuantity: (state, actions: PayloadAction<Product>) => {
      const payloadProd = actions.payload

      const productInCart = getProductInCart(payloadProd, state)
      if (productInCart) {
        productInCart.quantity++
      }
      state.total += +payloadProd.price
      setItem(constant.CART, state)
    },

    decreaseQuantity: (state, actions: PayloadAction<Product>) => {
      const payloadProd = actions.payload
      if (!payloadProd || !payloadProd._id?.$oid) return state

      const productInCart = getProductInCart(payloadProd, state)
      if (productInCart) {
        productInCart.quantity--
      }

      state.total -= +payloadProd.price
      setItem(constant.CART, state)
    },

    deleteCart: (state) => {
      state = initialState
      removeItem(constant.CART)
    },

    removeProduct: (state, actions: PayloadAction<Product>) => {
      const payloadProd = actions.payload

      const prodIndex = state.products.findIndex(
        (prod) => prod._id.$oid === payloadProd._id.$oid
      )
      if (prodIndex === -1) return

      state.total -=
        state.products[prodIndex].quantity * state.products[prodIndex].price

      state.products.splice(prodIndex, 1)
      setItem(constant.CART, state)
    }
  }
})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer

export const getProductInCart = (product: Product, cart: Cart) => {
  if (!product || !cart || !cart.products?.length) return null

  return cart.products.find((prod) => prod._id.$oid === product._id.$oid)
}
