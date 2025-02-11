/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { ColorSchemeName } from 'react-native'

const tintColorLight = '#0a7ea4'
const tintColorDark = '#fff'

type ColorType = {
  text: string
  background: string
  tint: string
  icon: string
  tabIconDefault: string
  tabIconSelected: string
}

const lightColor: ColorType = {
  text: '#11181C',
  background: '#fff',
  tint: tintColorLight,
  icon: '#687076',
  tabIconDefault: '#687076',
  tabIconSelected: tintColorLight,
}

const darkColor: ColorType = {
  ...lightColor,
  text: '#ECEDEE',
  background: '#151718',
  tint: tintColorDark,
  icon: '#9BA1A6',
  tabIconDefault: '#9BA1A6',
  tabIconSelected: tintColorDark,
}

export const Colors = (colorScheme: ColorSchemeName = 'light') => {
  return colorScheme === 'dark' ? darkColor : lightColor
}
