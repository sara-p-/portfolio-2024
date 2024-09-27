import './project.css'

import Button from '../Button/Button'

export interface projectProps {
  id?: string
  title: string
  subtitle: string
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
  title,
  subtitle,
  shortDesc,
  link,
  linkText,
  repoLink,
  image,
}: projectProps) {
  const buttonText: string =
    linkText !== '' ? `Visit ${linkText}` : `Visit ${title}`

  const shortTextArray: string[] = shortDesc.split('\\n')

  // const categories: string[] = cat?.split(', ')
  // const stacks: string[] = stack?.split(', ')

  return (
    <div className='project'>
      <div className='project-wrapper'>
        <div className='project-col'>
          <figure className='project-figure'>
            <img
              className='project-image'
              src={`/screenshots/${image}`}
              alt={`Screenshot of ${title} website.`}
            />
          </figure>
        </div>
        <div className='project-col'>
          <div className='project-content'>
            <h2 className='project-title'>{title}</h2>
            <h3 className='project-subtitle'>{subtitle}</h3>
            <div className='project-short-desc'>
              {shortTextArray.map((line) => {
                return <p>{line.replace('\\n', '')}</p>
              })}
            </div>
            <div className='buttons'>
              <Button
                text={buttonText}
                href={link}
                icon={'external-link.svg'}
                classes={['outline']}
              />
              {repoLink && (
                <Button
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
