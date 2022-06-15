import { isFunction } from 'c-ufunc/isFunction'

import { ToggleInterface } from './toggle.types'

export function toggleTheme(props: ToggleInterface): Record<string, any> {
  const {
    theme: { border, utility, unit, Toggle },
  } = props

  return {
    position: 'relative',
    alignItems: 'center',
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-flex',
    height: unit[5],
    width: unit[5],

    input: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0,
      cursor: 'inherit',

      '&:focus~.ToggleUnchecked, &:focus~.ToggleChecked': {
        border: border.thickOutline,
      },
    },

    '.ToggleUnchecked, .ToggleChecked': {
      position: 'absolute',
      pointerEvents: 'none',
      border: border.thickTransparent,

      transition: utility.easeMedium(),
    },

    '.ToggleChecked': {
      opacity: 0,
    },

    'input:checked~.ToggleChecked, input:indeterminate~.ToggleChecked': {
      opacity: 1,
    },

    'input:checked~.ToggleUnchecked, input:indeterminate~.ToggleUnchecked': {
      opacity: 0,
    },

    ...(isFunction(Toggle) ? Toggle(props)?.default : Toggle)?.default,
  }
}