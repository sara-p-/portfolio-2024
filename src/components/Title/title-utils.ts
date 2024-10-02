import { sumPrefixes } from '../../helpers/utils'

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
  let widths: { width: number; x: number }[] = []
  if (refs.current) {
    widths = refs.current?.map((ref) => {
      if (ref) {
        return {
          width: ref.getBoundingClientRect().width,
          x: ref.getBoundingClientRect().x,
        }
      }
      return { width: 0, x: 0 }
    })
  }

  return widths
}

// Accept the ref array of letters, and return the height and widths
export function getLettersWidthAndHeight(
  refs: React.MutableRefObject<HTMLSpanElement[]>
) {
  // Get the height of the letters to use as the height of the words
  const wordHeight = refs.current[0].getBoundingClientRect().height
  // Get the widths of each letter in the word
  const letterWidthsAndPosition = getLetterWidths(refs)

  const letterWidths = letterWidthsAndPosition.map((item) => item.width)
  // const lettersLeft = letterWidthsAndPosition.map((item) => item.x)

  // console.log({ lettersLeft })

  // Get the sum of all the letter widths to figure out the total width of the word
  const wordWidth = letterWidths.reduce(
    (accumulator: number, current: number) => {
      return accumulator + current
    },
    0
  )

  // Create a new array that starts at zero, and removes the last item of the letterWidths array.
  // We will use this array to calculate the left position of each letter
  // Calculate the left position of each letter by incrementally adding items of the original array and returning the sums in a new array
  const rawLettersLeft = sumPrefixes(letterWidths)

  const lettersLeft = [...rawLettersLeft]

  return { wordHeight, wordWidth, letterWidths, lettersLeft }
}
