import './section.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import Title from '../Title/Title'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'

type sectionProps = {
  id: string
  firstLine: string
  secondLine?: string
  children: React.ReactNode
}

function Section({ id, firstLine, secondLine, children }: sectionProps) {
  const [timeline, setTimeline] = useState<GSAPTimeline | undefined>(undefined)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    if (!sectionRef.current) {
      return
    }

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 40%',
      },
    })

    setTimeline(t1)
  }, [])

  return (
    <section id={id} ref={sectionRef}>
      <div className='wrapper'>
        <Title
          firstLine={firstLine}
          secondLine={secondLine}
          timeline={timeline}
        />
        {children}
      </div>
    </section>
  )
}

export default Section
