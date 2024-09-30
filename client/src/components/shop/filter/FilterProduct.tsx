import { FC, ReactNode } from 'react'

type Props = {
  children?: ReactNode
}
const FilterProduct: FC<Props> = ({ children }) => {
  return (
    <div className='dropdown'>
      <button
        className='dropdown-toggle p-0 border border-2 border-dark bg-white px-2'
        type='button'
        id='dropdownMenuButton1'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        {children ?? 'Default sorting'}
      </button>
      <ul
        className='dropdown-menu border border-2 rounded-0 border-dark'
        aria-labelledby='dropdownMenuButton1'
      >
        <li>
          <a
            className='dropdown-item'
            href='#'
          >
            Action
          </a>
        </li>
        <li>
          <a
            className='dropdown-item'
            href='#'
          >
            Another action
          </a>
        </li>
        <li>
          <a
            className='dropdown-item'
            href='#'
          >
            Something else here
          </a>
        </li>
      </ul>
    </div>
  )
}

export default FilterProduct
