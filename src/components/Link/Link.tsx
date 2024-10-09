import './link.css'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export interface linkProps {
  href: string
  linkText: string
  navLocation: string
}

function Link({ href, linkText, navLocation }: linkProps) {
  function handleLinkClick(
    e: React.MouseEvent<HTMLAnchorElement | MouseEvent>,
    linkId: string
  ): void {
    e.preventDefault()

    const element: HTMLElement | null = document.querySelector(`#${linkId}`)
    const headerHeight: number | undefined =
      document.querySelector('header')?.offsetHeight

    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: headerHeight },
        ease: 'power2',
      })
      // If the menu is the mobile menu, close it after a link is clicked
      if (navLocation === 'mobile') {
        const mobileMenu: HTMLElement | null =
          document.querySelector('.mobile-menu')
        mobileMenu?.classList.remove('active')
      }
    }
  }

  return (
    <a
      href={href}
      className='link'
      onClick={(e) => handleLinkClick(e, linkText)}
    >
      {linkText}
    </a>
  )
}

export default Link
