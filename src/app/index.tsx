import { Cell, Section } from '@/components/List'
import { Colors } from '@/constants/Colors'
import { styleType } from '@/utils/styles'
import { Href, useRouter } from 'expo-router'
import { useCallback } from 'react'
import { ScrollView, useColorScheme, ViewStyle } from 'react-native'
import { makeStyles } from 'react-native-swag-styles'

type ComponentProps = {
  onPressNavigateTabs: () => void
  onPressNavigateModal: () => void
  onPressNavigateUnmatched: () => void
  onPressNavigateFailed: () => void
}
type Props = ComponentProps & {}

const Component: React.FC<ComponentProps> = ({
  onPressNavigateTabs,
  onPressNavigateModal,
  onPressNavigateUnmatched,
  onPressNavigateFailed,
}) => {
  const styles = useStyles()

  return (
    <ScrollView>
      <ScrollView style={styles.scrollView}>
        <Section title="ナビゲーションの基礎">
          <Cell title="タブを表示する" onPress={onPressNavigateTabs} />
          <Cell title="モーダルを表示する" onPress={onPressNavigateModal} />
          <Cell
            title="エラーハンドリング（未設定ページ）"
            onPress={onPressNavigateUnmatched}
          />
          <Cell
            title="エラーハンドリング（レンダリングエラー）"
            onPress={onPressNavigateFailed}
          />
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

  const onPressNavigateUnmatched = useCallback(() => {
    // 存在しないページを表示させようとします
    router.navigate('/404' as Href)
  }, [router])

  const onPressNavigateFailed = useCallback(() => {
    router.navigate('/failed')
  }, [router])

  return (
    <Component
      {...props}
      {...{
        onPressNavigateTabs,
        onPressNavigateModal,
        onPressNavigateUnmatched,
        onPressNavigateFailed,
      }}
    />
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
