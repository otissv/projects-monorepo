import { isFunction } from 'c-ufunc/libs/isFunction'

import { MainInterface } from './main.types'

export function mainTheme(props: MainInterface): Record<string, any> {
  const {
    theme: { Main },
  } = props

  return {
    position: 'relative',
    ...(isFunction(Main) ? Main(props)?.default : Main?.default),
  }
}
