import { useState } from 'react'

const useFetch = (url: string, initialData: any) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<any>(initialData)
  const [error, setError] = useState<any | null>(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch(url)
      if (!res.ok) {
        throw new Error('cannot fetch url')
      }
      const data = await res.json()
      setData(data)
    } catch (error) {
      setError(error)
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  return { data, setData, error, loading, fetchData }
}

export default useFetch
