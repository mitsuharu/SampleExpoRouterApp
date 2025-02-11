import { Colors } from '@/constants/Colors'
import { useRandom } from '@/hooks/useRandom'
import { styleType } from '@/utils/styles'
import { Redirect } from 'expo-router'
import { Text, TextStyle, useColorScheme, View, ViewStyle } from 'react-native'
import { makeStyles } from 'react-native-swag-styles'

type ComponentProps = {}
type Props = ComponentProps & {}

const Component: React.FC<ComponentProps> = ({}) => {
  const styles = useStyles()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>A</Text>
    </View>
  )
}

const Container: React.FC<Props> = (props) => {
  // ABテストのシミュレーション
  const rnd = useRandom()
  if (rnd > 0.5) {
    return <Redirect href="/b" />
  }

  return <Component {...props} />
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
    fontSize: 40,
    color: 'red',
  }),
}))
