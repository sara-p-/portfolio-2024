// function to fetch the data object from the specified file
export async function fetcher(endpoint: string) {
  const response = await fetch(endpoint)
  const json = await response.json()
  if (!json.length) {
    throw json
  }
  return json
}

// function to create an array from the incrementing sum of the given array
export function sumPrefixes(arr: number[]) {
  // console.log({ arr })

  const result = []
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    // console.log({ arr: arr[1], sum })

    result.push(sum)
  }

  return result
}
