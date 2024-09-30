import './footer.css'
import ButtonLink from '../ButtonLink/ButtonLink'
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer id='contact' className='footer'>
      <div className='wrapper'>
        <nav className='nav' aria-label='social'>
          <ul className='menu footer__menu'>
            <li className='menu-item footer__menu-item'>
              <ButtonLink
                text=''
                hiddenText='Link to Github'
                href='https://github.com/sara-p-?tab=repositories'
                icon={faGithub}
                classes={['footer__link']}
              />
            </li>
            <li className='menu-item footer__menu-item'>
              <ButtonLink
                text=''
                hiddenText='Link to Instagram'
                href='https://www.instagram.com/all_ofthethings/?hl=en'
                icon={faInstagram}
                classes={['footer__link']}
              />
            </li>
            <li className='menu-item footer__menu-item'>
              <ButtonLink
                text=''
                hiddenText='Link to LinkedIn'
                href='www.linkedin.com/in/sara-pitt-a51302a6'
                icon={faLinkedinIn}
                classes={['footer__link']}
              />
            </li>
            <li className='menu-item footer__menu-item'>
              <ButtonLink
                text=''
                hiddenText='Email me'
                href=''
                icon={faPaperPlane}
                classes={['footer__link']}
              />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
