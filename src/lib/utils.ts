import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export async function makeHttpRequest(url: string, method: HttpMethod, body?: any) {
  console.log('url', url)
  try {
    const fetchOptions = {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      ...(body && { body: JSON.stringify(body) })
    }

    const response = await fetch(url, fetchOptions)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status},${await response.json()}`);
    }

    const responseBody = await response.json();
    return responseBody

  } catch (error) {
    console.error('Request failed', error);
    return error
  }
}


export function calculateCoordinatesCenter(coords: Coordinate[]): Coordinate | undefined {

  if (coords.length === 0) return undefined

  const [sumLat, sumLng] = coords.reduce(
    ([accLat, accLng], [lat, lng]) => [accLat + lat, accLng + lng], [0, 0]
  )
  const centerLat = sumLat / coords.length
  const centerLng = sumLng / coords.length

  return [centerLat, centerLng]

}