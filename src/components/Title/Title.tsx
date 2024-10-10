// import { useRef } from 'react'
import './title.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import { useId, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

type titleProps = {
  firstLine: string
  secondLine?: string
}

function Title({ firstLine, secondLine }: titleProps) {
  const timeLine = useRef<GSAPTimeline | undefined>(undefined)
  const titleBox = useRef<HTMLDivElement | null>(null)
  const id = useId()
  const firstWord = `first-${id}`
  const secondWord = `second-${id}`

  useGSAP(
    () => {
      const first = new SplitText(`#${CSS.escape(firstWord)}`, {
        type: 'chars',
      })
      const second = new SplitText(`#${CSS.escape(secondWord)}`, {
        type: 'chars',
      })

      timeLine.current = gsap.timeline({
        scrollTrigger: {
          trigger: titleBox.current,
          start: 'top 60%',
          markers: true,
        },
      })

      // Set the titles to visible. (In the css they are hidden because there is a flash of the title when the page first loads before the animation starts)
      timeLine.current.set(titleBox.current, { autoAlpha: 1 })
      timeLine.current.from(first.chars, {
        duration: 0.6,
        yPercent: -100,
        stagger: 0.07,
      })
      timeLine.current.from(
        second.chars,
        {
          duration: 0.6,
          yPercent: -100,
          stagger: 0.07,
        },
        '-=0.5'
      )
    },
    { scope: titleBox }
  )

  return (
    <div className='title-box' ref={titleBox}>
      <h1 className='title'>
        <span id={firstWord} className='word first-line'>
          {firstLine}
        </span>
        {secondLine && (
          <span id={secondWord} className='word second-line'>
            {secondLine}
          </span>
        )}
      </h1>
    </div>
  )
}

export default Title
