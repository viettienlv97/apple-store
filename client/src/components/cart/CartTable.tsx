import { Trash2, ChevronLeft, ChevronRight } from 'react-feather'
import { formattedPrice } from '../../utils/helper'
import { Cart, Product } from '../../store/interface'
import { FC } from 'react'

type Props = {
  cart: Cart
  onDelete: (product: Product) => void
  onDecrease: (product: Product) => void
  onIncrease: (product: Product) => void
}

const CartTable: FC<Props> = ({ cart, onDelete, onDecrease, onIncrease }) => {
  return (
    <table className='table table-borderless lato-regular-italic'>
      <thead>
        <tr>
          <th
            scope='col'
            className='py-3 text-center bg-light'
          >
            IMAGE
          </th>
          <th
            scope='col'
            className='py-3 text-center bg-light'
          >
            PRODUCT
          </th>
          <th
            scope='col'
            className='py-3 text-center bg-light'
          >
            PRICE
          </th>
          <th
            scope='col'
            className='py-3 text-center bg-light'
          >
            QUANTITY
          </th>
          <th
            scope='col'
            className='py-3 text-center bg-light'
          >
            TOTAL
          </th>
          <th
            scope='col'
            className='py-3 text-center bg-light'
            style={{ minWidth: '90px' }}
          >
            REMOVE
          </th>
        </tr>
      </thead>
      <tbody>
        {cart &&
          cart.products.length > 0 &&
          cart.products.map((product) => {
            return (
              <tr
                key={product._id.$oid}
                className='text-center'
              >
                <td>
                  <img
                    src={product.img1}
                    alt=''
                    width={80}
                  />
                </td>
                <td className='align-middle fw-bold'>{product.name}</td>
                <td className='align-middle text-gray no-highlight'>
                  {formattedPrice(product.price)} VND
                </td>
                <td className='align-middle'>
                  <div className='d-flex align-items-center justify-content-around'>
                    <ChevronLeft
                      role='button'
                      onClick={() => onDecrease(product)}
                      className={`${
                        product.quantity <= 1
                          ? 'cursor-not-allowed text-gray'
                          : undefined
                      }`}
                    />
                    <span className='no-highlight'>{product.quantity}</span>
                    <ChevronRight
                      role='button'
                      className={`${
                        product.quantity >= 10
                          ? 'cursor-not-allowed text-gray'
                          : undefined
                      }`}
                      onClick={() => onIncrease(product)}
                    />
                  </div>
                </td>
                <td className='align-middle text-gray no-highlight'>
                  {formattedPrice(product.price * product.quantity)} VND
                </td>
                <td className='align-middle'>
                  <Trash2
                    size={16}
                    role='button'
                    onClick={() => onDelete(product)}
                  />
                </td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export default CartTable
