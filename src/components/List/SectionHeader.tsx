import { styleType } from '@/utils/styles'
import React from 'react'
import {
  type StyleProp,
  StyleSheet,
  Text,
  type TextStyle,
  View,
  type ViewStyle,
} from 'react-native'

type Props = { title?: string; style?: StyleProp<ViewStyle> }

const Component: React.FC<Props> = ({ title, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const Container: React.FC<Props> = (props) => <Component {...props} />

export { Container as SectionHeader }

const styles = StyleSheet.create({
  container: styleType<ViewStyle>({
    backgroundColor: '#F2F2F2',
    paddingVertical: 8,
    paddingHorizontal: 16,
  }),
  text: styleType<TextStyle>({
    fontWeight: '500',
    color: '#4F5A6B',
  }),
})
