import { useDispatch, useSelector } from 'react-redux'
import { Gift, ArrowLeft, ArrowRight } from 'react-feather'
import CartTable from './CartTable'
import { formattedPrice } from '../../utils/helper'
import { Link } from 'react-router-dom'
import { cartActions, getProductInCart } from '../../store/cart'
import { Cart as CartType, Product } from '../../store/interface'
import { State } from '../../store'

const Cart = () => {
  const cart = useSelector((state: State) => state.cart)
  const dispatch = useDispatch()

  const handleDeleteProduct = (product: Product) => {
    const process = confirm('Are you sure?')
    if (process) dispatch(cartActions.removeProduct(product))
  }

  const handleDecreaseProduct = (product: Product) => {
    const productInCart = getProductInCart(product, cart)
    if (productInCart) {
      if (productInCart.quantity <= 1) {
        const process = confirm('Do you want to delete product?')
        if (process) dispatch(cartActions.removeProduct(product))
      } else {
        dispatch(cartActions.decreaseQuantity(product))
      }
    }
  }

  const handleIncreaseProduct = (product: Product) => {
    const productInCart = getProductInCart(product, cart)
    if (productInCart) {
      if (productInCart.quantity >= 10) {
        alert('Product quantity react limit!')
        return
      } else {
        dispatch(cartActions.increaseQuantity(product))
      }
    }
  }

  return (
    <div className='container'>
      <div className='row mb-5'>
        <div className='col-12 ps-0 mt-5 mb-4'>
          <h5 className='lato-regular-italic fw-bold'>SHOPPING CART</h5>
        </div>

        <div className='col-8 ps-0'>
          <CartTable
            cart={cart}
            onDelete={handleDeleteProduct}
            onDecrease={handleDecreaseProduct}
            onIncrease={handleIncreaseProduct}
          />
          <div className='bg-light d-flex align-items-center justify-content-between py-3 lato-regular-italic px-4'>
            <Link
              className='navlink d-flex align-items-center'
              to={'/shop'}
            >
              <ArrowLeft size={16} />
              <span className='ms-1'>Continue Shopping</span>
            </Link>
            <button className='border-1 bg-light py-1 px-2 lato-regular-italic text-dark d-flex align-items-center'>
              <Link
                to={'/checkout'}
                className='navlink text-dark d-flex align-items-center'
              >
                <span className='me-1'>Proceed to checkout</span>
                <ArrowRight
                  size={16}
                  color='black'
                />
              </Link>
            </button>
          </div>
        </div>
        <div className='col-4 pe-0'>
          <div className='bg-light p-5 lato-regular-italic'>
            <h5 className='fw-bold mb-4'>CART TOTAL</h5>
            <div className='d-flex'>
              <h6 className='fw-bold flex-grow-1'>SUBTOTAL</h6>
              <h6 className='text-gray'>{formattedPrice(cart.total)} VND</h6>
            </div>
            <div className='border-bottom border-gray'></div>
            <div className='d-flex mt-2 align-items-center mb-3'>
              <h6 className='fw-bold flex-grow-1'>TOTAL</h6>
              <h5>{formattedPrice(cart.total)} VND</h5>
            </div>
            <div>
              <input
                type='text'
                placeholder='Enter your coupon'
                className='w-100 border border-1 border-gray p-2 text-gray'
              />
            </div>
            <div>
              <button className='w-100 border-0 bg-btn-black text-light py-2'>
                <span className=' d-flex justify-content-center align-items-center'>
                  <Gift
                    size={16}
                    className='me-2'
                  />
                  <span className=''>Apply coupon</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
