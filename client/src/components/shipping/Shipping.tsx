import ShippingContent from './Content'
const desc = 'Free shipping worldwide'

const titles = [
  {
    id: 'shipping-title-01',
    text: 'FREE SHIPPING'
  },
  {
    id: 'shipping-title-02',
    text: '24 x 7 SERVICE'
  },
  {
    id: 'shipping-title-03',
    text: 'FESTIVAL OFFER'
  }
]

const Shipping = () => {
  return (
    <section id='shipping'>
      <div className='container bg-light py-5 mt-5'>
        <div className='d-flex'>
          <div className='flex-grow-1'></div>
          {titles.map((title) => {
            return (
              <ShippingContent
                key={title.id}
                className='flex-grow-1'
                title={title.text}
                desc={desc}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Shipping
