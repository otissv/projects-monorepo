import { isFunction } from 'c-ufunc/isFunction'

import { ButtonIconInterface } from './buttonIcon.types'

export function buttonIconTheme(
  props: ButtonIconInterface
): Record<string, any> {
  const {
    dimension,
    theme: { utility, unit, ButtonIcon },
  } = props

  return {
    position: 'relative',
    whiteSpace: 'nowrap',
    transition: utility.easeFast(),
    ...(dimension ? { height: dimension, width: dimension, padding: 0 } : {}),

    '>svg.Icon': {
      ...(dimension
        ? { height: dimension, width: dimension }
        : { transform: 'translateY(4px)' }),
    },

    '>span.ButtonIconContent': {
      display: 'inline-block',
      paddingLeft: unit[2],
    },
    ...(isFunction(ButtonIcon)
      ? ButtonIcon(props)?.default
      : ButtonIcon?.default),
  }
}
