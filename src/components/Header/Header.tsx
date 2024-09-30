import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons'
import Nav from '../Nav/Nav'
import { useRef } from 'react'

function Header() {
  const mobileMenuRef = useRef<HTMLElement>()
  function handleMobileClick(ele: HTMLElement): void {
    ele.classList.add('active')
  }

  return (
    <header className='header'>
      <div ref={mobileMenuRef} className='mobile-menu'>
        <div className='menu-header'>
          <button className='mobile-menu-back-button'>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <h2>Menu</h2>
        </div>
        <Nav label={'mobile'} />
      </div>
      <div className='wrapper'>
        <a href='#' className='logo'>
          SP
        </a>
        <Nav label={'primary'} />
        <button
          className='mobile-menu-button'
          onClick={() => {
            handleMobileClick(mobileMenuRef.current)
          }}
        >
          <FontAwesomeIcon icon={faBars} />
          <span className='visually-hidden'>Open the Mobile Menu</span>
        </button>
      </div>
    </header>
  )
}

export default Header
