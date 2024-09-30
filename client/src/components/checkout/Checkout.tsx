import { useSelector } from 'react-redux'
import { formattedPrice } from '../../utils/helper'
import { State } from '../../store'

const Checkout = () => {
  const cart = useSelector((state: State) => state.cart)
  return (
    <div className='container'>
      <div className='row mb-5'>
        <div className='col-12 ps-0 mt-5 mb-4'>
          <h5 className='lato-regular-italic fw-bold'>BILLING DETAILS</h5>
        </div>
        <div className='col-8 ps-0'>
          <form>
            <div className='d-flex flex-column'>
              <label
                className='lato-regular-italic text-gray py-2'
                htmlFor='fullname'
              >
                FULL NAME:
              </label>
              <input
                type='text'
                placeholder='Enter Your Full Name Here!'
                id='fullname'
                className='p-2 border-1 border-gray'
              />
            </div>
            <div className='d-flex flex-column'>
              <label
                className='lato-regular-italic text-gray py-2'
                htmlFor='email'
              >
                EMAIL:
              </label>
              <input
                type='text'
                placeholder='Enter Your Email Here!'
                id='email'
                className='p-2 border-1 border-gray'
              />
            </div>
            <div className='d-flex flex-column'>
              <label
                className='lato-regular-italic text-gray py-2'
                htmlFor='phone'
              >
                PHONE NUMBER:
              </label>
              <input
                type='text'
                placeholder='Enter Your Phone Number Here!'
                id='phone'
                className='p-2 border-1 border-gray'
              />
            </div>
            <div className='d-flex flex-column mb-3'>
              <label
                className='lato-regular-italic text-gray py-2'
                htmlFor='address'
              >
                ADDRESS:
              </label>
              <input
                type='text'
                placeholder='Enter Your Address Here!'
                id='address'
                className='p-2 border-1 border-gray'
              />
            </div>
            <button className='bg-btn-black text-gray py-1 px-4 lato-regular-italic fs-5'>
              Place order
            </button>
          </form>
        </div>
        <div className='col-4 pe-0'>
          <div className='bg-light p-5 lato-regular-italic'>
            <h5 className='fw-bold mb-4'>YOUR ORDER</h5>
            {cart.products.map((prod) => {
              return (
                <>
                  <div className='row'>
                    <h6 className='fw-bold col-7'>{prod.name}</h6>
                    <h6 className='text-gray col-5 text-end'>
                      {formattedPrice(prod.price)} VND x{prod.quantity}
                    </h6>
                  </div>
                  <div className='border-bottom border-gray mb-2'></div>
                </>
              )
            })}

            <div className='d-flex mt-2 align-items-center'>
              <h6 className='fw-bold flex-grow-1'>TOTAL</h6>
              <h5>{formattedPrice(cart.total)} VND</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
