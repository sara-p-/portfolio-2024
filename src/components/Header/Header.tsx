import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons'
import Nav from '../Nav/Nav'
import { useRef } from 'react'

function Header() {
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)

  // function handleBackClick(): void {
  //   if (mobileMenuRef.current) {
  //     mobileMenuRef.current.classList.remove('active')
  //   }
  // }
  // function handleBarsClick(): void {
  //   if (mobileMenuRef.current) {
  //     if (open) {
  //       mobileMenuRef.current.classList.remove('active')
  //     } else {
  //       mobileMenuRef.current.classList.add('active')
  //     }
  //   }
  // }

  return (
    <header className='header'>
      <div ref={mobileMenuRef} className='mobile-menu'>
        <div className='menu-header'>
          <button
            className='mobile-menu-back-button'
            onClick={() => {
              if (mobileMenuRef.current)
                mobileMenuRef.current.classList.remove('active')
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
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
            if (mobileMenuRef.current)
              mobileMenuRef.current.classList.add('active')
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
