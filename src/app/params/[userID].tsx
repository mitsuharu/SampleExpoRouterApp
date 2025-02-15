import { Colors } from '@/constants/Colors'
import { styleType } from '@/utils/styles'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import { Text, TextStyle, useColorScheme, View, ViewStyle } from 'react-native'
import { makeStyles } from 'react-native-swag-styles'

type Params = { userID: string }

type ComponentProps = {} & Params
type Props = ComponentProps & {}

const Component: React.FC<ComponentProps> = ({ userID }) => {
  const styles = useStyles()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>動的ルートでパラメータ受け取り[UserID]</Text>
      <Text style={styles.text}>userID: {userID}</Text>
    </View>
  )
}

const Container: React.FC<Props> = (props) => {
  const navigation = useNavigation()
  const { userID } = useLocalSearchParams<Params>()

  useEffect(() => {
    navigation.setOptions({ title: '動的ルート [UserID]' })
  }, [navigation])

  return <Component {...props} {...{ userID }} />
}

export default Container

const useStyles = makeStyles(useColorScheme, (colorScheme) => ({
  container: styleType<ViewStyle>({
    flex: 1,
    backgroundColor: Colors(colorScheme).background,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  text: styleType<TextStyle>({
    fontSize: 30,
    color: Colors(colorScheme).text,
  }),
}))
