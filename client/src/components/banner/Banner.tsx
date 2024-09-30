import { Link } from 'react-router-dom'

const bannerUrl = '/banner/banner.jpg'

const Banner = () => {
  return (
    <section
      id='banner'
      style={{ height: '50vh' }}
    >
      <div className='h-100 container'>
        <div
          style={{
            height: '100%',
            backgroundImage: `url(${bannerUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPositionY: 'center',
            backgroundPositionX: 'right'
          }}
          className='position-relative'
        >
          <div
            className='position-absolute bottom-50 left-0 ms-5 ps-3'
            style={{ transform: 'translateY(50%)' }}
          >
            <h6 className='text-gray fs-7'>
              <i>NEW INSPIRATION 2020</i>
            </h6>
            <h2>
              <i>20% OFF ON NEW</i>
            </h2>
            <h2>
              <i>SEASON</i>
            </h2>
            <button className='text-light bg-btn-black border-0 py-2 px-4 fw-400'>
              <Link
                to={'/shop'}
                className='text-light text-decoration-none'
              >
                <i>Browse collections</i>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
