import './link.css'

export interface linkProps {
  href: string
  linkText: string
}

export default function Link({ href, linkText }: linkProps) {
  return (
    <a href={href} className='link'>
      {linkText}
    </a>
  )
}
