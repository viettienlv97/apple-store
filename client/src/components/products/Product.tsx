import { FC } from 'react'
import { formattedPrice } from '../../utils/helper'
import { Product as ProductType } from '../../zustand/productStore.ts'
type ProductProps = {
  product: ProductType
  className: string
  selectProduct: (product: ProductType) => void
}

const Product: FC<ProductProps> = ({ product, className, selectProduct }) => {
  return (
    <div
      className={className}
      role='button'
      onClick={() => selectProduct(product)}
    >
      <img
        src={product.img1}
        alt=''
        className='w-100 product-img'
      />
      <div className='text-center mt-4'>
        <h6 className='fw-bold'>
          <i>{product.name}</i>
        </h6>
        <span className='text-gray fs-7 lato-light-italic'>
          {formattedPrice(product.price)} VND
        </span>
      </div>
    </div>
  )
}

export default Product
