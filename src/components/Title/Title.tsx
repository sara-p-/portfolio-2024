// import { useRef } from 'react'
import './title.css'
import { getLettersWidthAndHeight, splitTitle } from './title-utils'
import { useEffect, useRef, useState } from 'react'

type titleProps = {
  firstLine: string
  secondLine?: string
}

function Title({ firstLine, secondLine }: titleProps) {
  // Get/Set the value of the word/letter measurements (through the useEffect hook)
  const [firstWord, setFirstWord] = useState({
    wordHeight: 0,
    wordWidth: 0,
    letterWidths: [0],
  })
  const [secondWord, setSecondWord] = useState({
    wordHeight: 0,
    wordWidth: 0,
    letterWidths: [0],
  })
  // Grab a reference to the span elements that hold the letters
  const firstLetters = useRef<HTMLSpanElement[]>([])
  const secondLetters = useRef<HTMLSpanElement[]>([])
  // Split the words into an array of letters
  const first: { id: string; letter: string }[] | undefined =
    splitTitle(firstLine)
  const second: { id: string; letter: string }[] | undefined =
    splitTitle(secondLine)

  // Calculate the pixel width of each letter span element and add it to an array
  useEffect(() => {
    if (!firstLetters.current) {
      return
    }

    // Get the height and width of the word, as well as the individual letters
    // const firstWordMeasurements = getLettersWidthAndHeight(firstLetters)
    // const firstObject = getLettersWidthAndHeight(firstLetters)
    setFirstWord(getLettersWidthAndHeight(firstLetters))
    if (secondWord) {
      // const secondWordMeasurements = getLettersWidthAndHeight(secondLetters)
      setSecondWord(getLettersWidthAndHeight(secondLetters))
    }
  }, [secondWord])

  return (
    <div className='title-box'>
      <h1 className='title'>
        <span
          className='word first-line'
          style={{ width: `${firstWord.wordHeight}px` }}
        >
          {first &&
            first.map((item, index) => {
              return (
                <span
                  key={item.id}
                  className='letter'
                  style={{}}
                  ref={(ref) => {
                    if (ref) firstLetters.current[index] = ref
                  }}
                >
                  {item.letter}
                </span>
              )
            })}
        </span>
        {second && (
          <span className='word second-line'>
            {second.map((item, index) => {
              return (
                <span
                  key={item.id}
                  className='letter'
                  ref={(ref) => {
                    if (ref) secondLetters.current[index] = ref
                  }}
                >
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
