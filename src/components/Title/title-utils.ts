// Turn the title string into an array of letters
export function splitTitle(title: string | undefined) {
  if (!title) {
    return undefined
  }

  const letterArray: string[] = title.split('')
  const letterArrayObject = []

  for (let i = 0; i < letterArray.length; i++) {
    letterArrayObject.push({
      id: crypto.randomUUID(),
      letter: letterArray[i],
    })
  }
  return letterArrayObject
}

// Grab the refs of the letters and return the pixel widths
export function getLetterWidths(
  refs: React.MutableRefObject<HTMLSpanElement[]>
) {
  let widths: number[]
  if (refs.current) {
    widths = refs.current?.map((ref) => {
      if (ref) {
        return ref.getBoundingClientRect().width
      }
      return 0
    })
  } else {
    widths = [0]
  }

  return widths
}

// Accept the ref array of letters, and return the height and widths
export function getLettersWidthAndHeight(
  refs: React.MutableRefObject<HTMLSpanElement[]>
) {
  // Get the height of the letters to use as the height of the words
  // const wordHeight = refs.current[0].getBoundingClientRect().height
  const wordHeight = 0
  // Get the widths of each letter in the word
  const letterWidths = getLetterWidths(refs)
  console.log(letterWidths)

  // Get the sum of all the letter widths to figure out the total width of the word
  const wordWidth = letterWidths.reduce(
    (accumulator: number, current: number) => accumulator + current
  )

  return { wordHeight, letterWidths, wordWidth }
}
