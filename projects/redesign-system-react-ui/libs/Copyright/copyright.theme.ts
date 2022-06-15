import { isFunction } from 'c-ufunc/isFunction'

import { CopyrightInterface } from './copyright.types'

export function copyrightTheme(props: CopyrightInterface): Record<string, any> {
  const {
    theme: { Copyright },
  } = props

  return {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flexBasis: 1,
    textAlign: 'right',
    flex: 'auto',
    justifyContent: 'flex-end',
    width: '100%',

    '@media (min-width: 768px)': {
      width: '50%',
    },
    ...(isFunction(Copyright) ? Copyright(props)?.default : Copyright?.default),
  }
}
