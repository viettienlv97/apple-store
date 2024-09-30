import Product from './Product'
import ProductModal from '../modal/ProductModal'
import ModalDetail from './ModalDetail'
import { useDispatch } from 'react-redux'
import { productActions } from '../../store/product.ts'
import useGetProducts from '../../hooks/useGetProducts.ts'
import { useState } from 'react'
import { Product as ProductType } from '../../store/interface.ts'

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const dispatch = useDispatch()
  const { products, loading, error } = useGetProducts()

  const openModal = (product: ProductType) => {
    dispatch(productActions.setProduct(product))
    setIsModalOpen(true)
  }

  const closeModal = () => {
    dispatch(productActions.removeProduct())
    setIsModalOpen(false)
  }

  return (
    <section id='products'>
      <div className='container mt-5'>
        <div className='mb-4'>
          <h6 className='text-gray fs-7 lato-light-italic'>
            MADE THE HARD DAY
          </h6>
          <h5>
            <i>TOP TRENDING PRODUCTS</i>
          </h5>
        </div>
        {loading && <p>Loading...</p>}
        {!loading && products && products.length && (
          <>
            <div className='row g-5'>
              {products.map((product) => {
                return (
                  <Product
                    key={product._id.$oid}
                    product={product}
                    selectProduct={openModal}
                    className={'col-3'}
                  />
                )
              })}
            </div>

            <ProductModal
              isOpen={isModalOpen}
              onClose={closeModal}
            >
              <ModalDetail onClose={closeModal} />
            </ProductModal>
          </>
        )}
        {!loading && error && <p>Error: {error.message}</p>}
      </div>
    </section>
  )
}

export default Products
