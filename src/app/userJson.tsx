import { Colors } from '@/constants/Colors'
import { styleType } from '@/utils/styles'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useEffect, useMemo } from 'react'
import { Text, TextStyle, useColorScheme, View, ViewStyle } from 'react-native'
import { makeStyles } from 'react-native-swag-styles'

export type User = {
  userID: string
  name: string
}

type Params = { userJson: string }

type ComponentProps = {
  user: User
}
type Props = ComponentProps & {}

const Component: React.FC<ComponentProps> = ({ user }) => {
  const styles = useStyles()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>パラメータ受け取り</Text>
      <Text style={styles.text}>userID: {user.userID}</Text>
      <Text style={styles.text}>name: {user.name}</Text>
    </View>
  )
}

const Container: React.FC<Props> = (props) => {
  const navigation = useNavigation()
  const { userJson } = useLocalSearchParams<Params>()

  useEffect(() => {
    navigation.setOptions({ title: 'UserJson' })
  }, [navigation])

  const user = useMemo(() => {
    return JSON.parse(userJson) as User
  }, [userJson])

  return <Component {...props} {...{ user }} />
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
