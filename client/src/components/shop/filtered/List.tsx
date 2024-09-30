import { FC } from 'react'
import { Product as ProductType } from '../../../store/interface'
import Product from '../../products/Product'
import { useNavigate } from 'react-router-dom'

type Props = {
  list: Array<ProductType>
}

const List: FC<Props> = ({ list }) => {
  const navigate = useNavigate()

  const handleNavigateToProduct = (product: ProductType) => {
    const productId = product._id.$oid
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
