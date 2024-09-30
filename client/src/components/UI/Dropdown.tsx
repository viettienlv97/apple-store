import { FC, ReactNode } from 'react'

type DropdownProps = {
  children?: ReactNode
}

const Dropdown: FC<DropdownProps> = ({ children }) => {
  return (
    <div className='dropdown'>
      <button
        className='btn dropdown-toggle p-0'
        type='button'
        id='dropdownMenuButton1'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        {children}
      </button>
      <ul
        className='dropdown-menu'
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

export default Dropdown
