// import { useRef } from 'react'
import './title.css'
import { splitTitle } from './title-utils'
import { useEffect, useRef } from 'react'

type titleProps = {
  firstLine: string
  secondLine?: string
}

function Title({ firstLine, secondLine }: titleProps) {
  // Split the words into an array of letters
  const first: { id: string; letter: string }[] | undefined =
    splitTitle(firstLine)
  const second: { id: string; letter: string }[] | undefined =
    splitTitle(secondLine)
  // Grab a reference to the span elements that hold the letters
  const firstRefs = useRef<HTMLSpanElement[]>()

  // console.log({ firstRefs })

  // function getRefs(theRef: HTMLSpanElement, index) {
  //   if(firstRefs.current) {
  //     return (firstRefs.current[index] = theRef)
  //   }
  //   return
  // }

  return (
    <div className='title-box'>
      <h1 className='title'>
        <span className='word first-line'>
          {first &&
            first.map((item, index) => {
              return (
                <span
                  key={item.id}
                  className='letter'
                  ref={(ref) => {
                    if (ref) {
                      if (firstRefs.current) {
                        console.log(firstRefs.current)

                        return (firstRefs.current[index] = ref)
                      }
                    }
                  }}
                >
                  {item.letter}
                </span>
              )
            })}
        </span>
        {second && (
          <span className='word second-line'>
            {second.map((item) => {
              return (
                <span key={item.id} className='letter'>
                  {item.letter}
                </span>
              )
            })}
          </span>
        )}
      </h1>
    </div>
  )
}

export default Title
