import { useParams } from 'react-router-dom'
import BannerShop from '../components/banner/BannerShop'
import ProductDetail from '../components/detail/ProductDetail'

const DetailPage = () => {
  const params = useParams()
  return (
    <main>
      <BannerShop title={'DETAIL'} />
      <ProductDetail productId={params['product-id']} />
    </main>
  )
}

export default DetailPage
