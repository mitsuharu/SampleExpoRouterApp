import { useState } from 'react'

/**
 * Favorite 画面のみの利用を想定するフック（内部実装は適当です）
 * @returns
 */
export const useFavorite = () => {
  const [value, setValue] = useState<boolean>(true)
  return value
}
