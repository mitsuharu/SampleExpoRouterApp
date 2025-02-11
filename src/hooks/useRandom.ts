import { useEffect, useState } from 'react'

export const useRandom = () => {
  const [value, setValue] = useState<number>(0)

  useEffect(() => {
    setValue(Math.random())
  }, [setValue])

  return value
}
