import React from 'react'
import { CellGroup } from './CellGroup'
import type { StyleProp, ViewStyle } from 'react-native'
import { SectionSeparator } from './Separator'
import { SectionHeader } from './SectionHeader'

type Props = {
  title?: string
  children?: React.ReactNode
  sectionStyle?: StyleProp<ViewStyle>
}

/**
 * ScrollView で　List 風表示するときの Section
 *
 * @param title - セクション名（省略化）
 *
 * @example
 * <Section title={"セクション名"}>
 *  <Cell title={"セル名"} onPress={ ... } />
 * 　...
 * </Section>
 */
const Component: React.FC<Props> = ({ title, children, sectionStyle }) => {
  return (
    <>
      <SectionHeader title={title} style={sectionStyle} />
      <SectionSeparator />
      <CellGroup>{children}</CellGroup>
      <SectionSeparator />
    </>
  )
}

export { Component as Section }
