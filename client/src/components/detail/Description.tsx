import { FC } from 'react'
import { Product } from '../../store/interface'

type Props = {
  product: Product
}
const Description: FC<Props> = ({ product }) => {
  const [title, ..._] = product && product.long_desc.split('\n')
  const long_desc = product.long_desc.replace(title, title.toUpperCase())
  return (
    <div className='mt-5 lato-regular-italic'>
      <button className='bg-btn-black text-light px-4 py-3 border-0 lato-regular-italic'>
        DESCRIPTION
      </button>
      <h5 className='mt-4 mb-4'>PRODUCT DESCRIPTION</h5>
      {long_desc && (
        <p
          className='text-gray'
          style={{ whiteSpace: 'pre-line' }}
        >
          {long_desc}
        </p>
      )}
    </div>
  )
}

export default Description
