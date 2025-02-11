import { Colors } from '@/constants/Colors'
import { styleType } from '@/utils/styles'
import { ErrorBoundaryProps } from 'expo-router'
import { useEffect } from 'react'
import { Text, TextStyle, useColorScheme, View, ViewStyle } from 'react-native'
import { makeStyles } from 'react-native-swag-styles'

type ComponentProps = {}
type Props = ComponentProps & {}

const Component: React.FC<ComponentProps> = ({}) => {
  const styles = useStyles()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>レンダリング失敗</Text>
    </View>
  )
}

/**
 * エラーを投げる画面です
 */
const Container: React.FC<Props> = (props) => {
  useEffect(() => {
    throw Error(
      'この画面は強制的にエラーを投げています。LogBox で専用エラー画面が隠れる場合があります。LogBox を Dismiss または Minimize してください。',
    )
  })
  return <Component {...props} />
}

/**
 * React Error Boundaries 
 */
export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  const styles = useStyles()
  return (
    <View style={[styles.container, { backgroundColor: 'red' }]}>
      <Text style={styles.text}>エラーメッセージ</Text>
      <Text style={styles.text}>{error.message}</Text>
      <Text style={styles.text} onPress={retry}>
        Try Again?
      </Text>
    </View>
  )
}

export default Container

const useStyles = makeStyles(useColorScheme, (colorScheme) => ({
  container: styleType<ViewStyle>({
    flex: 1,
    padding: 16,
    backgroundColor: Colors(colorScheme).background,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  text: styleType<TextStyle>({
    fontSize: 30,
    color: Colors(colorScheme).text,
    marginBottom: 8,
  }),
}))
