import { FC, FormEvent, useEffect, useState } from 'react'
import { formattedPrice } from '../../utils/helper'
import { ChevronLeft, ChevronRight } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store/cart'
import Loading from '../UI/Loading'
import { Product } from '../../store/interface'
import { State } from '../../store'

type Props = {
  product: Product
}

const Detail: FC<Props> = ({ product }) => {
  const cartState = useSelector((state: State) => state.cart)
  const [quantity, setQuantity] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setQuantity(1)
  }, [product])

  useEffect(() => {}, [cartState])
  console.log(cartState)

  const handleAddToCart = (e: FormEvent) => {
    e.preventDefault()
    const cartProd: Product = {
      ...product,
      quantity
    }

    const productInCart = cartState.products.find(
      (prod) => prod._id.$oid === cartProd._id.$oid
    )
    setLoading(true)

    if (productInCart) {
      dispatch(cartActions.updateCart(cartProd))
    } else {
      dispatch(cartActions.addToCart(cartProd))
    }
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const handleDecrease = () => {
    if (quantity <= 1) return
    setQuantity((prev) => --prev)
  }
  const handleIncrease = () => {
    if (quantity >= 10) return
    setQuantity((prev) => ++prev)
  }

  return (
    <div className='lato-regular-italic'>
      <h2 className=' mb-4'>{product.name}</h2>
      <h4 className='text-gray fs-5 mb-4'>
        {formattedPrice(product.price)} VND
      </h4>
      <p className='text-gray'>{product.short_desc}</p>
      <h6 className='mt-5'>
        CATEGORY: <span className='text-gray ms-2'>{product.category}</span>
      </h6>
      <form onSubmit={handleAddToCart}>
        <div className='d-flex mt-4'>
          <div className='border border-1 d-flex align-items-center text-gray w-50 py-2 px-3 justify-content-between'>
            <span>QUANTITY</span>
            <div className='d-flex align-items-center text-black lato-regular'>
              <ChevronLeft
                className=''
                role='button'
                onClick={handleDecrease}
              />
              <span className='mx-2 no-highlight'>{quantity}</span>
              <ChevronRight
                role='button'
                onClick={handleIncrease}
              />
            </div>
          </div>
          <button
            className='bg-btn-black text-light px-4 border-0 lato-regular-italic no-highlight'
            disabled={loading}
          >
            {loading ? <Loading /> : <span>Add to cart</span>}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Detail
