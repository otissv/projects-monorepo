import { isFunction } from 'c-ufunc/isFunction'

import { CaptionInterface } from './caption.types'

export function captionTheme(props: CaptionInterface): Record<string, any> {
  const {
    theme: { color, font, unit, Caption },
  } = props

  return {
    position: 'absolute',
    right: unit[1],
    bottom: unit[1],
    color: color.white,
    fontSize: font[1],
    ...(isFunction(Caption) ? Caption(props)?.default : Caption?.default),
  }
}