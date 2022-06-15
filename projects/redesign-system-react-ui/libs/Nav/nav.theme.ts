import { isFunction } from 'c-ufunc/isFunction'

import {
  NavInterface,
  NavItemButtonInterface,
  NavItemInterface,
} from './nav.types'

export function navTheme(props: NavInterface): Record<string, any> {
  const {
    stacked,
    theme: { utility, Nav },
  } = props

  return {
    display: 'inline-flex',
    flexDirection: stacked ? 'column' : 'row',
    listStyle: 'none',
    position: 'relative',
    transition: utility.easeFast(),
    verticalAlign: 'middle',

    ...(isFunction(Nav) ? Nav(props)?.appearance : Nav?.appearance),
  }
}

export function navItemTheme(props: NavItemInterface): Record<string, any> {
  const {
    theme: { NavItem },
  } = props

  return {
    '> a, button': {
      width: '100%',
    },
    ...(isFunction(NavItem) ? NavItem(props)?.appearance : NavItem?.appearance),
  }
}

export function navItemButtonTheme(
  props: NavItemButtonInterface
): Record<string, any> {
  const {
    theme: { NavItemButton },
  } = props

  return {
    ...(isFunction(NavItemButton)
      ? NavItemButton(props)?.appearance
      : NavItemButton?.appearance),
  }
}
