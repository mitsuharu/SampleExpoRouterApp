import { Cell, Section } from '@/components/List'
import { Colors } from '@/constants/Colors'
import { styleType } from '@/utils/styles'
import { Href, useRouter } from 'expo-router'
import { useCallback } from 'react'
import { ScrollView, useColorScheme, ViewStyle } from 'react-native'
import { makeStyles } from 'react-native-swag-styles'
import { User } from './userJson'

type ComponentProps = {
  onPressNavigateTabs: () => void
  onPressNavigateModal: () => void
  onPressNavigateUnmatched: () => void
  onPressNavigateFailed: () => void
  onPressNavigateDynamicUserID: () => void
  onPressNavigateUserID: () => void
  onPressNavigateUserJson: () => void
  onPressNavigateAB: () => void
}
type Props = ComponentProps & {}

const Component: React.FC<ComponentProps> = ({
  onPressNavigateTabs,
  onPressNavigateModal,
  onPressNavigateUnmatched,
  onPressNavigateFailed,
  onPressNavigateDynamicUserID,
  onPressNavigateUserID,
  onPressNavigateUserJson,
  onPressNavigateAB,
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
        <Section title="データ渡し">
          <Cell
            title="UserID（動的ルートで渡す）"
            onPress={onPressNavigateDynamicUserID}
          />
          <Cell
            title="UserID（URLパラメータでデータを渡す）"
            onPress={onPressNavigateUserID}
          />
          <Cell
            title="UserJson（オブジェクトを JSON にして渡す）"
            onPress={onPressNavigateUserJson}
          />
        </Section>
        <Section title="リダイレクト">
          <Cell title="ABテスト" onPress={onPressNavigateAB} />
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
    router.navigate('/unmatched/404/' as Href)
  }, [router])

  const onPressNavigateFailed = useCallback(() => {
    router.navigate('/failed')
  }, [router])

  const onPressNavigateDynamicUserID = useCallback(() => {
    // router.navigate または router.push のどちらでも OK
    router.navigate('/params/123')
  }, [router])

  const onPressNavigateUserID = useCallback(() => {
    // router.navigate または router.push のどちらでも OK
    router.navigate('/params/userID?userID=123')
  }, [router])

  const onPressNavigateUserJson = useCallback(() => {
    // router.navigate または router.push のどちらでも OK
    const user: User = {
      userID: '1234',
      name: 'aaaa',
    }
    router.push({
      pathname: '/params/userJson',
      params: {
        userJson: JSON.stringify(user),
      },
    })
  }, [router])

  const onPressNavigateAB = useCallback(() => {
    router.navigate('/a')
  }, [router])

  return (
    <Component
      {...props}
      {...{
        onPressNavigateTabs,
        onPressNavigateModal,
        onPressNavigateUnmatched,
        onPressNavigateFailed,
        onPressNavigateDynamicUserID,
        onPressNavigateUserID,
        onPressNavigateUserJson,
        onPressNavigateAB,
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
