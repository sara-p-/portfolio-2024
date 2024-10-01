// Turn the title string into an array of letters
export const splitTitle = (title: string | undefined) => {
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
