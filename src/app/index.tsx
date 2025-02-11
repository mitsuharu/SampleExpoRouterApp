import { Cell, Section } from '@/components/List'
import { Colors } from '@/constants/Colors'
import { styleType } from '@/utils/styles'
import { useRouter } from 'expo-router'
import { useCallback } from 'react'
import { ScrollView, useColorScheme, ViewStyle } from 'react-native'
import { makeStyles } from 'react-native-swag-styles'

type ComponentProps = {
  onPressNavigateTabs: () => void
  onPressNavigateModal: () => void
}
type Props = ComponentProps & {}

const Component: React.FC<ComponentProps> = ({
  onPressNavigateTabs,
  onPressNavigateModal,
}) => {
  const styles = useStyles()

  return (
    <ScrollView>
      <ScrollView style={styles.scrollView}>
        <Section title="ナビゲーションの基礎">
          <Cell title="タブを表示する" onPress={onPressNavigateTabs} />
          <Cell title="モーダルを表示する" onPress={onPressNavigateModal} />
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

  const onPressNavigateModal = useCallback(() => {
    router.navigate('/modal')
  }, [router])

  return (
    <Component {...props} {...{ onPressNavigateTabs, onPressNavigateModal }} />
  )
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
