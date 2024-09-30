import { FC } from 'react'

type Props = {
  title: string
  subtitle?: Array<string>
}
const BannerShop: FC<Props> = ({ title, subtitle }) => {
  return (
    <section
      id='banner-shop'
      style={{ height: '200px' }}
    >
      <div className='h-100 container bg-light d-flex align-items-center'>
        <div className='d-flex justify-content-between w-100 mx-5'>
          <h2 className='lato-regular-italic'>{title}</h2>
          {!subtitle && (
            <h6 className='text-gray lato-regular-italic d-flex align-items-center'>
              {title}
            </h6>
          )}
          {subtitle && (
            <h6 className='text-gray lato-regular-italic d-flex align-items-center'>
              <span className='text-dark'>{subtitle[0]}</span>
              <span>{subtitle[1]}</span>
            </h6>
          )}
        </div>
      </div>
    </section>
  )
}

export default BannerShop
