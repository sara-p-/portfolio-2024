import './header.css'
import Link from '../Link/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Toggle from '../Toggle/Toggle'

function Header() {
  return (
    <header className='header'>
      <div className='wrapper'>
        <a href='#' className='logo'>
          SP
        </a>
        <nav className='nav' aria-label='primary'>
          <ul className='menu'>
            <li className='menu-item'>
              <Link href={'#'} linkText={'home'} />
            </li>
            <li className='menu-item'>
              <Link href={'#'} linkText={'work'} />
            </li>
            <li className='menu-item'>
              <Link href={'#'} linkText={'about'} />
            </li>
            <li className='menu-item'>
              <Link href={'#'} linkText={'contact'} />
            </li>
          </ul>
          <Toggle />
        </nav>
        <button className='mobile-menu-button'>
          <FontAwesomeIcon icon={faBars} />
          <span className='visually-hidden'>Open the Mobile Menu</span>
        </button>
      </div>
    </header>
  )
}

export default Header
