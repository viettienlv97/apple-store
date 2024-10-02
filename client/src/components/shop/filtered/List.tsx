import { FC } from 'react'
import { Product as ProductType } from '../../../zustand/productStore.ts'
import Product from '../../products/Product'
import { useNavigate } from 'react-router-dom'

type Props = {
  list: ProductType[]
}

const List: FC<Props> = ({ list }) => {
  const navigate = useNavigate()

  const handleNavigateToProduct = (product: ProductType) => {
    console.log('product', product);
    
    const productId = product._id
    navigate(`/detail/${productId}`)
  }

  return (
    <div className='row'>
      {list.map((item) => {
        return (
          <Product
            key={item._id.$oid}
            product={item}
            className={'col-4'}
            selectProduct={handleNavigateToProduct}
          />
        )
      })}
    </div>
  )
}

export default List
