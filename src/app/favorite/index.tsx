import { Colors } from '@/constants/Colors'
import { styleType } from '@/utils/styles'
import { Text, TextStyle, useColorScheme, View, ViewStyle } from 'react-native'
import { makeStyles } from 'react-native-swag-styles'
import { useFavorite } from './_hooks/useFavorite'

type ComponentProps = {
  isFavorite: boolean
}
type Props = ComponentProps & {}

const Component: React.FC<ComponentProps> = ({ isFavorite }) => {
  const styles = useStyles()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>私好みのディレクトリ構造です。</Text>
      <Text style={styles.text}>Favorite画面</Text>
      <Text style={styles.text}>
        isFavorite = {isFavorite ? 'true' : 'false'}
      </Text>
    </View>
  )
}

const Container: React.FC<Props> = (props) => {
  const isFavorite = useFavorite()
  return <Component {...props} {...{ isFavorite }} />
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
