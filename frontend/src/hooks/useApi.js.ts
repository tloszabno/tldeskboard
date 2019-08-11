import { useEffect, useState } from 'react'
import axios from 'axios'



export function useApi<T>(initialUrl : string, initialState : T) : [T, boolean, boolean, ((data: string)=>void)]{
  const [url, setUrl] = useState<string>(initialUrl)
  const [data, setData] = useState<T>(initialState)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(false)
      try {
        const result = await axios(url)
        setData(result.data)
      }catch (e) {
        setError(true)
      }
      setLoading(false)
    }

    fetchData()
  }, [url])

  return [data, loading, error, setUrl]
}