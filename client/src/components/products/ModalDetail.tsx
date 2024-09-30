import { ShoppingCart, X } from 'react-feather'
import { useSelector } from 'react-redux'
import { formattedPrice } from '../../utils/helper'
import { Link } from 'react-router-dom'
import { FC } from 'react'
import { State } from '../../store'

type ModalDetailProps = {
  onClose: () => void
}

const ModalDetail: FC<ModalDetailProps> = ({ onClose }) => {
  const product = useSelector((state: State) => state.product)

  return (
    <div className='position-relative'>
      <div className='row'>
        <div className='col-7'>
          <img
            src={product.img1}
            alt=''
            className='w-100'
          />
        </div>
        <div className='col-5'>
          <div className='my-4 me-4 ps-3'>
            <h5 className='lato-regular-italic'>{product.name}</h5>
            <h6 className='lato-regular-italic text-gray'>
              {formattedPrice(product.price)} VND
            </h6>
            <p className='text-dark lato-regular-italic fs-6'>
              {product.short_desc}
            </p>
          </div>
          <button className='btn bg-btn-black rounded-0 px-4'>
            <Link
              className='text-decoration-none text-light'
              to={`/detail/${product._id.$oid}`}
            >
              <ShoppingCart className='me-2' />
              View Detail
            </Link>
          </button>
        </div>
      </div>
      <div
        className='position-absolute top-0 end-0'
        onClick={onClose}
        role='button'
      >
        <X className='text-dark' />
      </div>
    </div>
  )
}

export default ModalDetail
