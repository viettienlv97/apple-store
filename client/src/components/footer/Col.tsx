import { FC } from 'react'

type ColProps = {
  title: string
  links: Array<string>
}

const Col: FC<ColProps> = ({ title, links }) => {
  return (
    <div className='my-5'>
      <h5 className='mb-3'>
        <i>{title}</i>
      </h5>
      {links.map((link) => {
        return (
          <div
            key={link}
            className='lato-light-italic text-gray'
          >
            <a
              href='#'
              className='navlink light'
            >
              {link}
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default Col
