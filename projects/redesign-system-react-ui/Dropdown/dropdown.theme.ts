import { isFunction } from 'ufunc/isFunction'

import { DropdownInterface, DropdownContentInterface } from './dropdown.types'

export function dropdownTheme(props: DropdownInterface): Record<string, any> {
  const {
    theme: { Dropdown },
  } = props

  return {
    position: 'relative',
    display: ' inline-block',
    ...(isFunction(Dropdown) ? Dropdown(props)?.default : Dropdown?.default),
  }
}

export function dropdownButtonTheme(
  props: DropdownInterface
): Record<string, any> {
  const {
    theme: { DropdownButton },
  } = props

  return {
    display: 'block',
    whiteSpace: 'nowrap',
    position: 'relative',

    '>svg.Icon': {
      transform: 'translateY(4px)',
    },
    ...(isFunction(DropdownButton)
      ? DropdownButton(props)?.button
      : DropdownButton?.button),
  }
}

export function dropdownContentTheme(
  props: DropdownContentInterface
): Record<string, any> {
  const {
    opened,
    height,
    justify,
    overflow,
    theme: { utility, DropdownContent },
  } = props

  return {
    position: 'absolute',
    zIndex: 8,
    display: 'inline-block',
    height: opened ? height : '0px',
    overflow,

    ...(justify
      ? {
          justifyContent: 'stretch',
          width: '100%',
        }
      : {}),
    transition: utility.easeMedium,
    ...(isFunction(DropdownContent)
      ? DropdownContent(props)?.content
      : DropdownContent?.content),
  }
}
