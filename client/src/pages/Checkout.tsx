import BannerShop from '../components/banner/BannerShop'
import Checkout from '../components/checkout/Checkout'

const CheckoutPage = () => {
  return (
    <main>
      <BannerShop
        title={'CHECKOUT'}
        subtitle={['HOME / CART', ' / CHECKOUT']}
      />
      <Checkout />
    </main>
  )
}

export default CheckoutPage
