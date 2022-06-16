import { isFunction } from 'c-ufunc/libs/isFunction'

import {
  ButtonGroupInterface,
  ButtonGroupButtonInterface,
  ButtonGroupButtonIconInterface,
} from './buttonGroup.types'

export function buttonGroupTheme(
  props: ButtonGroupInterface
): Record<string, any> {
  const {
    stacked,
    theme: { utility, ButtonGroup },
  } = props

  return {
    display: 'inline-flex',
    position: 'relative',
    transition: utility.easeMedium(),
    verticalAlign: 'middle',
    flexDirection: stacked ? 'column' : 'row',
    ...(isFunction(ButtonGroup)
      ? ButtonGroup(props)?.default
      : ButtonGroup?.default),
  }
}

export function buttonStretchGroupTheme(
  props: ButtonGroupInterface
): Record<string, any> {
  const {
    stretch,
    theme: { ButtonGroup },
  } = props

  const buttonGroupStretchTheme = isFunction(ButtonGroup)
    ? ButtonGroup(props)?.stretch
    : ButtonGroup?.stretch

  return stretch ? { width: '100%', ...buttonGroupStretchTheme } : {}
}

export function buttonGroupButtonTheme(
  props: ButtonGroupButtonInterface
): Record<string, any> {
  const {
    theme: { ButtonGroupButton },
  } = props

  return {
    ...(isFunction(ButtonGroupButton)
      ? ButtonGroupButton(props)?.default
      : ButtonGroupButton?.default),
  }
}

export function buttonGroupButtonIconTheme(
  props: ButtonGroupButtonIconInterface
): Record<string, any> {
  const {
    theme: { ButtonGroupButtonIcon },
  } = props

  return {
    ...(isFunction(ButtonGroupButtonIcon)
      ? ButtonGroupButtonIcon(props)?.default
      : ButtonGroupButtonIcon?.default),
  }
}
