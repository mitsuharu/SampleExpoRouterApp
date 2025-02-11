import React, { type ReactNode } from 'react'
import {
  type StyleProp,
  StyleSheet,
  Text,
  type TextStyle,
  View,
  type ViewStyle,
} from 'react-native'
import { Button } from '../Button'
import { contentInset } from './util'
import { type Size } from '@/utils/types'
import { styleType } from '@/utils/styles'

const AccessorySize: Size = { width: 20, height: 20 }

type ContentProps = Partial<{ title: string; children: ReactNode }>
type AccessoryProps = Partial<{ AccessoryView: React.FC<any> }>

export type Props = ContentProps &
  AccessoryProps & {
    subtitle?: string
    description?: string
    onPress?: () => void
    onLongPress?: () => void

    /**
     * titleとsubtitleを横に並べるならtrue。デフォルトはfalse。
     */
    isRowDirection?: boolean

    style?: StyleProp<ViewStyle>
    titleStyle?: StyleProp<TextStyle>
    subtitleStyle?: StyleProp<TextStyle>

    inactive?: boolean
  }

const Component: React.FC<Props> = ({
  title,
  children,
  subtitle,
  description,
  onPress,
  onLongPress,
  style,
  titleStyle,
  subtitleStyle,
  isRowDirection,
  AccessoryView,
  inactive,
}) => {
  return (
    <Button
      style={[styles.container, style]}
      onPress={onPress}
      onLongPress={onLongPress}
      inactive={inactive}
    >
      {!!children && children}
      <View style={styles.row}>
        {!!title && (
          <View style={isRowDirection ? styles.innerRow : styles.innerColumn}>
            {!!subtitle && (
              <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
            )}
            <Text style={[styles.text, titleStyle]}>{title}</Text>
            {!!description && (
              <Text style={[styles.subtitle, subtitleStyle]}>
                {description}
              </Text>
            )}
          </View>
        )}
        {!!AccessoryView && <AccessoryView />}
      </View>
    </Button>
  )
}

export { Component as Cell }

const styles = StyleSheet.create({
  container: styleType<ViewStyle>({
    minHeight: Math.max(
      44,
      AccessorySize.height + contentInset.top + contentInset.bottom,
    ),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  }),
  row: styleType<ViewStyle>({
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: contentInset.top,
    paddingBottom: contentInset.bottom,
    paddingLeft: contentInset.left,
    paddingRight: contentInset.right,
  }),
  innerColumn: styleType<ViewStyle>({
    flex: 1,
    flexDirection: 'column',
  }),
  innerRow: styleType<ViewStyle>({
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  text: styleType<TextStyle>({
    color: 'black',
    fontSize: 15,
    lineHeight: 22,
  }),
  subtitle: styleType<TextStyle>({
    color: '#4F5A6B',
    fontSize: 13,
    lineHeight: 19,
    paddingRight: 6,
  }),
})
