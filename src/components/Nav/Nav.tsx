import './nav.css'
import Link from '../Link/Link'
import Toggle from '../Toggle/Toggle'
import { MENU_ARRAY } from '../../globals/global-variables'

interface navProps {
  label: string
}

function Nav({ label }: navProps) {
  function handleNavClick(e): void {
    e.preventDefault()
    // const element: HTMLDivElement | null = document.getElementById(sectionName)
    // const headerHeight = document.querySelector('header').offsetHeight // Get the height of your header

    // window.scrollTo({
    //   top: element.offsetTop - headerHeight,
    //   behavior: 'smooth', // Optional for smooth scrolling
    // })
  }

  return (
    <nav className='nav' aria-label={label}>
      <ul className='menu'>
        {MENU_ARRAY.map((item) => {
          return (
            <li className='menu-item'>
              <Link href={`#${item}`} linkText={item} />
            </li>
          )
        })}
      </ul>
      <Toggle />
    </nav>
  )
}

export default Nav
