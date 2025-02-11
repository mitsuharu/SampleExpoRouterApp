import { Cell, Section } from '@/components/List'
import { Colors } from '@/constants/Colors'
import { styleType } from '@/utils/styles'
import { useRouter } from 'expo-router'
import { useCallback } from 'react'
import { ScrollView, useColorScheme, ViewStyle } from 'react-native'
import { makeStyles } from 'react-native-swag-styles'

type ComponentProps = {
  onPressNavigateTabs: () => void
}
type Props = ComponentProps & {}

const Component: React.FC<ComponentProps> = ({ onPressNavigateTabs }) => {
  const styles = useStyles()
  
  return (
    <ScrollView>
      <ScrollView style={styles.scrollView}>
        <Section title="section 1">
          <Cell title="タブを表示する" onPress={onPressNavigateTabs} />
        </Section>
      </ScrollView>
    </ScrollView>
  )
}

const Container: React.FC<Props> = (props) => {
  const router = useRouter()

  const onPressNavigateTabs = useCallback(() => {
    router.navigate('/tabs')
  }, [router])

  return <Component {...props} {...{ onPressNavigateTabs }} />
}

export default Container

const useStyles = makeStyles(useColorScheme, (colorScheme) => ({
  container: styleType<ViewStyle>({
    flex: 1,
    backgroundColor: Colors(colorScheme).background,
  }),
  scrollView: styleType<ViewStyle>({
    flex: 1,
  }),
}))
