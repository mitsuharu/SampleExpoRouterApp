import { useRandom } from '@/hooks/useRandom'
import { Slot, Redirect } from 'expo-router'
import { useEffect } from 'react'

export default function Layout() {
  // URL 基準でリダイレクトする場合
  // const rnd = useRandom()
  // if (rnd > 0.66) {
  //   return <Redirect href="/" />
  // }
  return <Slot initialRouteName="a" />
}
