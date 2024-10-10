import './project.css'

import ButtonLink from '../ButtonLink/ButtonLink'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

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
  imageClass: string
}

function Project({
  title,
  subtitle,
  shortDesc,
  link,
  linkText,
  repoLink,
  image,
  imageClass,
}: projectProps) {
  const projectRef = useRef<HTMLDivElement | null>(null)

  const buttonText: string =
    linkText !== '' ? `Visit ${linkText}` : `Visit ${title}`
  const shortTextArray: string[] = shortDesc.split('\\n')

  useGSAP(
    () => {
      if (projectRef.current) {
        console.log(projectRef.current)

        // create the selector to select the right image
        const selector = gsap.utils.selector(projectRef)

        gsap.from(selector('.project-image.right'), {
          duration: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: projectRef.current,
            start: 'top 60%',
          },
          xPercent: 110,
        })

        gsap.from(selector('.project-image.left'), {
          ease: 'power1.out',
          duration: 1,
          scrollTrigger: {
            trigger: projectRef.current,
            start: 'top 60%',
          },
          xPercent: -110,
        })
      }
    },
    { scope: projectRef }
  )

  return (
    <div className='project' ref={projectRef}>
      <div className='project-wrapper'>
        <div className='project-col'>
          <figure className='project-figure'>
            <img
              className={`project-image ${imageClass}`}
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
              <ButtonLink
                text={buttonText}
                href={link}
                icon={faArrowUpRightFromSquare}
                classes={['outline']}
              />
              {repoLink && (
                <ButtonLink
                  text='Go to repo'
                  href={repoLink}
                  icon={faArrowUpRightFromSquare}
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
