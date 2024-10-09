import './nav.css'
import Link from '../Link/Link'
import Toggle from '../Toggle/Toggle'
import { MENU_ARRAY } from '../../globals/global-variables'

interface navProps {
  label: string
}

function Nav({ label }: navProps) {
  return (
    <nav className='nav' aria-label={label}>
      <ul className='menu'>
        {MENU_ARRAY.map((item) => {
          const id: string = crypto.randomUUID()
          return (
            <li className='menu-item' key={id}>
              <Link href={`#${item}`} linkText={item} navLocation={label} />
            </li>
          )
        })}
      </ul>
      <Toggle />
    </nav>
  )
}

export default Nav
