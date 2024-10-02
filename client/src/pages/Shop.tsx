import BannerShop from '../components/banner/BannerShop'
import ProductsList from '../components/shop/ProductsList'

const ShopPage = () => {
  return (
    <main>
      <BannerShop
        title={'SHOP'}
      />
      <ProductsList />
    </main>
  )
}

export default ShopPage
