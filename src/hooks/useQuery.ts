import { useState, useEffect } from "react"

export function useQuery<T extends (...args: any[]) => Promise<any>>(fn: T): [Awaited<ReturnType<T>>, any] {
  const [data, setData] = useState()
  const [error, setError] = useState()
  
  useEffect(() => {
    fn().then(setData).catch(setError)
  }, [])

  return [
    data!,
    error
  ]
}
