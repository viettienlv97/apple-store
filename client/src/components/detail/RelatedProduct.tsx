import { FC } from 'react'
import List from '../shop/filtered/List'
import { Product } from '../../store/interface'

type Props = {
  list: Array<Product>
}

const RelatedProduct: FC<Props> = ({ list }) => {
  return (
    <div className='lato-regular-italic mt-5'>
      <h5>RELATED PRODUCTS</h5>
      <div className='w-75 mt-4'>
        <List list={list} />
      </div>
    </div>
  )
}

export default RelatedProduct
