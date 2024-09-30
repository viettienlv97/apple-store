import { NavLink } from 'react-router-dom'
import './Nav.scss'
import { FC, ReactNode } from 'react'

type NavProps = {
  children?: ReactNode
  linkTo: string
}
const Nav: FC<NavProps> = ({ children, linkTo }) => {
  return (
    <NavLink
      className='navlink'
      to={linkTo}
    >
      {children}
    </NavLink>
  )
}

export default Nav
