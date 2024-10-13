import './button-link.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'

type buttonProps = {
  text?: string
  hiddenText?: string
  href: string
  icon: IconDefinition
  classes: string[]
  contact?: boolean
}

function ButtonLink({
  text,
  hiddenText,
  href,
  icon,
  classes = [],
  contact = false,
}: buttonProps) {
  const buttonRef = useRef<HTMLAnchorElement | null>(null)

  // create the string of classes or return an empty string
  const formattedClasses: string = classes.length > 0 ? classes.join(' ') : ''

  // function to insert my email onclick on the contact button
  function insertEmail(): void {
    if (!contact) {
      return
    }

    const encEmail = 'c2FyYXBpdHQ4OEBnbWFpbC5jb20='

    if (buttonRef.current) {
      buttonRef.current.href = `mailto:${atob(encEmail)}`
    }
  }

  return (
    <a
      ref={buttonRef}
      href={href}
      target='_blank'
      className={`button ${formattedClasses}`}
      onClick={insertEmail}
    >
      <span className='button-wrapper'>
        {text !== undefined && text}
        {hiddenText !== undefined && (
          <span className='visually-hidden'>{hiddenText}</span>
        )}
        <FontAwesomeIcon className='icon' icon={icon} />
      </span>
    </a>
  )
}

export default ButtonLink
