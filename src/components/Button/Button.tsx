import './button.css'

type buttonProps = {
  text: string
  href: string
  icon: string
  classes: string[]
}

function ButtonLink({ text, href, icon, classes = [] }: buttonProps) {
  const formattedClasses: string = classes.length > 0 ? classes.join(' ') : ''
  return (
    <a href={href} target='_blank' className={`button ${formattedClasses}`}>
      {text}{' '}
      <img
        src={`/icons/${icon}`}
        aria-hidden='true'
        className='button-link-image'
      />
    </a>
  )
}

export default ButtonLink
