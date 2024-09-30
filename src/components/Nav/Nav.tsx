import Link from '../Link/Link'
import Toggle from '../Toggle/Toggle'
import './nav.css'

interface navProps {
  label: string
}

function Nav({ label }: navProps) {
  return (
    <nav className='nav' aria-label={label}>
      <ul className='menu'>
        <li className='menu-item'>
          <Link href={'#home'} linkText={'home'} />
        </li>
        <li className='menu-item'>
          <Link href={'#work'} linkText={'work'} />
        </li>
        <li className='menu-item'>
          <Link href={'#about'} linkText={'about'} />
        </li>
        <li className='menu-item'>
          <Link href={'#contact'} linkText={'contact'} />
        </li>
      </ul>
      <Toggle />
    </nav>
  )
}

export default Nav
