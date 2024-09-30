import Banner from '../components/banner/Banner'
import Collection from '../components/collection/Collection'
import Products from '../components/products/Products'
import Shipping from '../components/shipping/Shipping'
import Subscribe from '../components/subscribe/Subscribe'

const HomePage = () => {
  return (
    <main>
      <Banner />
      <Collection />
      <Products />
      <Shipping />
      <Subscribe />
    </main>
  )
}

export default HomePage
