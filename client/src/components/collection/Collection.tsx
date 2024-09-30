import { Link } from 'react-router-dom'

const products: Array<string> = []
for (let i = 1; i <= 5; i++) {
  const productUrl = `/products/product_${i}.png`
  products.push(productUrl)
}

const Collection = () => {
  return (
    <section id='collection'>
      <div className='container mt-5'>
        <div className='text-center mb-4'>
          <h6 className='text-gray fs-7 lato-light-italic'>
            CAREFULLY CREATED COLLECTIONS
          </h6>
          <h5>
            <i>BROWSE OUR CATEGORIES</i>
          </h5>
        </div>
        <div className='row g-4'>
          {products.map((product, index) => {
            return (
              <div
                key={product}
                className={index < 2 ? 'col-6' : 'col-4'}
              >
                <Link to={'/shop'}>
                  <img
                    src={product}
                    alt='product'
                    className='w-100'
                  />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Collection
