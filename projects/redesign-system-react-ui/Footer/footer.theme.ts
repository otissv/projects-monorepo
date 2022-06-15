import { isFunction } from 'ufunc/isFunction'

import { FooterInterface } from './footer.types'

export function footerTheme(props: FooterInterface): Record<string, any> {
  const {
    theme: { breakpoints, font, unit, Footer },
  } = props

  return {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
    lineHeight: font.lineHeight[3],
    flexDirection: 'column',
    padding: unit[5],

    [` @media only screen and (min-width: ${breakpoints.md}px)`]: {
      flexDirection: 'row',
      padding: unit[8],
    },

    'div.FixedWidth': {
      flexDirection: 'column',

      [` @media only screen and (min-width: ${breakpoints.md}px)`]: {
        flexDirection: 'row',
      },
    },

    a: { textDecoration: 'none' },
    ul: { listStyle: 'none' },

    ...(isFunction(Footer) ? Footer(props).default : Footer?.default),
  }
}
