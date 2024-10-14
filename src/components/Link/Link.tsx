import './link.css'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export interface linkProps {
  href: string
  linkText: string
  linkClass?: string[]
  navLocation?: string
}

function Link({ href, linkText, linkClass, navLocation }: linkProps) {
  // format the classes
  const linkClasses: string[] = linkClass?.length
    ? ['link', ...linkClass]
    : ['link']

  function handleLinkClick(
    e: React.MouseEvent<HTMLAnchorElement | MouseEvent>,
    href: string
  ): void {
    e.preventDefault()

    const element: HTMLElement | null = document.querySelector(href)
    const headerHeight: number | undefined =
      document.querySelector('header')?.offsetHeight

    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: headerHeight },
        ease: 'power2',
      })
      // If the menu is the mobile menu, close it after a link is clicked
      if (navLocation && navLocation === 'mobile') {
        const mobileMenu: HTMLElement | null =
          document.querySelector('.mobile-menu')
        mobileMenu?.classList.remove('active')
      }
    }
  }

  return (
    <a
      href={href}
      className={linkClasses.join(' ')}
      onClick={(e) => handleLinkClick(e, href)}
    >
      {linkText}
    </a>
  )
}

export default Link
