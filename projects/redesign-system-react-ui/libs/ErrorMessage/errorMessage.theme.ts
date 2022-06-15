import { isFunction } from 'c-ufunc/isFunction'
import { ErrorMessageInterface } from './errorMessage.types'

import { PRIMARY, SECONDARY, TERTIARY } from '@redesign-system/theme/libs'

export function errorMessageTheme(
  props: ErrorMessageInterface
): Record<string, any> {
  const {
    theme: { utility, color, unit, ErrorMessage },
  } = props

  return {
    position: 'relative',
    color: color.error,
    transition: utility.easeMedium(),
    paddingTop: unit[1],
    paddingBottom: unit[1],
    ...(isFunction(ErrorMessage)
      ? ErrorMessage(props)?.default
      : ErrorMessage?.default),
  }
}

export function errorMessageAppearanceTheme(
  props: ErrorMessageInterface
): Record<string, any> {
  const {
    appearance,
    theme: { border, color, unit, ErrorMessage },
  } = props

  const errorMessageAppearanceTheme = isFunction(ErrorMessage)
    ? ErrorMessage(props)?.appearance
    : ErrorMessage?.appearance

  switch (appearance) {
    case SECONDARY:
      return {
        color: color.error_200,
        border: border.thinError600,
        paddingLeft: unit[2],
        paddingRight: unit[2],
        ...errorMessageAppearanceTheme?.secondary,
      }
    case TERTIARY:
      return {
        color: color.error_200,
        border: border.thinTransparent,
        paddingLeft: unit[2],
        paddingRight: unit[2],
        ...errorMessageAppearanceTheme?.secondary,
      }

    case PRIMARY:
    default:
      return {
        color: color.text,
        backgroundColor: color.error,
        paddingLeft: unit[2],
        paddingRight: unit[2],
        ...errorMessageAppearanceTheme?.primary,
      }
  }
}
