import BannerShop from '../components/banner/BannerShop'
import Cart from '../components/cart/Cart'

const CartPage = () => {
  return (
    <main>
      <BannerShop
        title={'CART'}
        subtitle={null}
      />
      <Cart />
    </main>
  )
}

export default CartPage
