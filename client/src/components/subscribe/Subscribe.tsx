import { FormEvent } from 'react'

const Subscribe = () => {
  const handleSubcrible = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <section id='subscribe'>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-6 px-0'>
            <div>
              <h5 className='fw-600'>
                <i>LET BE FRIENDS!</i>
              </h5>
              <span className='text-gray lato-light-italic'>
                Nisi nisi tempor consequat laboris nisi.
              </span>
            </div>
          </div>
          <div className='col-6 px-0'>
            <form onSubmit={handleSubcrible}>
              <div className='d-flex'>
                <input
                  type='text'
                  className='border border-1 py-3 ps-3 flex-grow-1 fs-7'
                  placeholder='Enter your email address'
                />
                <button className='bg-btn-black text-light px-4 border-0'>
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
