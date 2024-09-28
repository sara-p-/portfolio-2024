import './button-link.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

type buttonProps = {
  text?: string
  hiddenText?: string
  href: string
  icon: IconDefinition
  classes: string[]
}

function ButtonLink({
  text,
  hiddenText,
  href,
  icon,
  classes = [],
}: buttonProps) {
  const formattedClasses: string = classes.length > 0 ? classes.join(' ') : ''
  return (
    <a href={href} target='_blank' className={`button ${formattedClasses}`}>
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
