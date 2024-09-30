import { FC, ReactNode } from 'react'

const bannerUrl = '/banner/banner.jpg'

type Props = {
  sectionId: string
  children: ReactNode
}

const UserForm: FC<Props> = ({ sectionId, children }) => {
  return (
    <section id={sectionId}>
      <div
        className='container-fluid'
        style={{
          backgroundImage: `url(${bannerUrl})`,
          backgroundSize: 'contain'
        }}
      >
        <div className='justify-content-center align-items-center vh-100 row'>
          <div className='col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4'>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserForm
