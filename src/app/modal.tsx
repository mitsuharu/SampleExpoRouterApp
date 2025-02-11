import { Colors } from '@/constants/Colors'
import { styleType } from '@/utils/styles'
import { Text, TextStyle, useColorScheme, View, ViewStyle } from 'react-native'
import { makeStyles } from 'react-native-swag-styles'

type ComponentProps = {}
type Props = ComponentProps & {}

const Component: React.FC<ComponentProps> = ({}) => {
  const styles = useStyles()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>モーダル画面</Text>
    </View>
  )
}

const Container: React.FC<Props> = (props) => {
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
    fontSize: 30,
    color: Colors(colorScheme).text,
  }),
}))
