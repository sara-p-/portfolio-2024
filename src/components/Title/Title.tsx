// import { useRef } from 'react'
import './title.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import { useId, useRef } from 'react'

gsap.registerPlugin(SplitText)

type titleProps = {
  firstLine: string
  secondLine?: string
}

function Title({ firstLine, secondLine }: titleProps) {
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
      const t1 = gsap.timeline()

      t1.from(first.chars, {
        duration: 0.6,
        yPercent: -100,
        stagger: 0.07,
      })
      t1.from(
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
