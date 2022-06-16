import { isFunction } from 'c-ufunc/libs/isFunction'

import { FixedWidthInterface } from './fixedWidth.types'

export function fixedWidthTheme(
  props: FixedWidthInterface
): Record<string, any> {
  const {
    theme: { FixedWidth },
  } = props

  return {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    maxWidth: '90rem',

    ...(isFunction(FixedWidth)
      ? FixedWidth(props).default
      : FixedWidth?.default),
  }
}
