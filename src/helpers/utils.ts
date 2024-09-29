export function range(start: number, end: number, step: number = 1): number[] {
  const result = []
  for (let i = start; i <= end; i += step) {
    result.push(i)
  }
  return result
}

// function to fetch the data object from the specified file
export async function fetcher(endpoint: string) {
  const response = await fetch(endpoint)
  const json = await response.json()
  if (!json.length) {
    throw json
  }
  return json
}
