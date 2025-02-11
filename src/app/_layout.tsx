import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack, useGlobalSearchParams, usePathname } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import 'react-native-reanimated'

import { useColorScheme } from '@/hooks/useColorScheme'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  const pathname = usePathname()
  const params = useGlobalSearchParams()

  useEffect(() => {
    // ユーザーがルートを変更するたびに解析サービスにアプリのパスやパラメータを送信する
    console.log(`pathname: ${pathname}, params: ${JSON.stringify(params)}`)
  }, [pathname, params])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="index">
        <Stack.Screen name="index" options={{ title: 'ホーム' }} />
        <Stack.Screen name="tabs" options={{ title: 'タブ' }} />
        <Stack.Screen
          name="modal"
          options={{ title: 'モーダル', presentation: 'modal' }}
        />
        <Stack.Screen name="failed" />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="(redirect)" options={{ title: 'ABテスト' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  )
}
