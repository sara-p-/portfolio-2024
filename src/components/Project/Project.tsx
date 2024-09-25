import './project.css'

import ButtonLink from '../ButtonLink/ButtonLink'

type projectProps = {
  id: string
  title: string
  subTitle: string
  shortDesc: string
  stack?: string
  cat?: string
  longDesc?: string
  link: string
  linkText?: string
  repoLink: string
  image: string
}

function Project({
  id,
  title,
  subTitle,
  shortDesc,
  link,
  linkText,
  repoLink,
  image,
}: projectProps) {
  const buttonText: string =
    linkText !== '' ? `Visit ${linkText}` : `Visit ${title}`

  // const categories: string[] = cat?.split(', ')
  // const stacks: string[] = stack?.split(', ')

  return (
    <div className='project' key={id}>
      <div className='project-wrapper'>
        <div className='col'>
          <img
            className='project-image'
            src={`/screenshots/${image}`}
            alt={`Screenshot of ${title} website.`}
          />
        </div>
        <div className='col'>
          <div className='project-content'>
            <h2 className='project-title'>{title}</h2>
            <h3 className='project-subtitle'>{subTitle}</h3>
            <div className='project-short-desc'>{shortDesc}</div>
            <div className='buttons'>
              <ButtonLink
                text={buttonText}
                href={link}
                icon={'external-link.svg'}
                classes={['outline']}
              />
              {repoLink && (
                <ButtonLink
                  text='Go to repo'
                  href={repoLink}
                  icon={'external-link.svg'}
                  classes={['outline']}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
