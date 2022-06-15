import { isFunction } from 'ufunc/isFunction'

import { RadioInterface } from './radio.types'
import { getBackgroundColor, getBorder } from '@redesign-system/react'

export function radioTheme(): Record<string, any> {
  return {
    display: 'inline-block',
  }
}

export function radioContainerTheme(
  props: RadioInterface
): Record<string, any> {
  const {
    appearance,
    theme: { color, utility, border, unit, Radio },
  } = props

  const positionAbsolute = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }

  return {
    position: 'relative',
    height: unit[5],
    width: unit[5],
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-block',
    top: '5px',

    label: {
      marginRight: unit[3],
    },

    input: {
      ...positionAbsolute,
      margin: 0,
      padding: 0,
      opacity: 0,
      cursor: 'inherit',

      '&:focus~.RadioBackground .RadioOuterCircle': {
        border: border.thickOutline,
        borderRadius: '50%',
      },
    },

    '.RadioBackground': {
      width: 'inherit',
      height: 'inherit',
      pointerEvents: 'none',
    },

    '.RadioOuterCircle': {
      ...positionAbsolute,
      borderRadius: '50%',
      border: getBorder(border, appearance),
    },

    '.RadioInnerCircle': {
      ...positionAbsolute,
      ...getBackgroundColor({ appearance, color }),
      borderRadius: '50%',
      opacity: 0,
      transform: 'scale(0)',
      transformOrigin: 'center center',
      transition: `${utility.easeFast()}, outline`,
    },

    'input:checked+.RadioBackground': {
      '.RadioInnerCircle': {
        ...getBackgroundColor({ appearance, color }),

        opacity: 1,
        transform: 'scale(0.5)',
      },
    },

    ...(isFunction(Radio) ? Radio(props)?.default : Radio?.default),
  }
}
