import { useEffect, useState } from 'react'
import Categories from '../categories/Categories'
import SearchProduct from './search/SearchProduct'
import FilterProduct from './filter/FilterProduct'
import List from './filtered/List'
import useProductStore from '../../zustand/productStore'

const ProductsList = () => {
  const {products, getProducts, loading } = useProductStore()
  const [category, setCategory] = useState<string>('')

  useEffect(() => {
    if (products && products.length > 0) {
      setCategory('all')
    } else {
      getProducts()
    }
  }, [products])

  const handleSelectCategory = (cate: string) => {
    setCategory(cate)
  }

  const filtered = () => {
    if (!products || products.length < 1) return []
    if (category === 'all') return products

    const filter = products.filter((item) => item && item.category === category)
    return filter
  }

  return (
    <section id='products-shop'>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-3 ps-0'>
            <Categories
              selectedCategory={category}
              onSelectCategory={handleSelectCategory}
            />
          </div>
          <div className='col-9 pe-0'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
              <SearchProduct />
              <FilterProduct />
            </div>
            {loading && <p>Loading...</p>}

            {!loading && filtered().length > 0 && <List list={filtered()} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsList
