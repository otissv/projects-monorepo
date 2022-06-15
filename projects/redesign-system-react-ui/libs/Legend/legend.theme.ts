import { isFunction } from 'c-ufunc/isFunction'

import { LegendInterface } from './legend.types'

export function legendTheme(props: LegendInterface): Record<string, any> {
  const {
    theme: { Legend },
  } = props

  return {
    position: 'relative',
    ...(isFunction(Legend) ? Legend(props)?.default : Legend?.default),
  }
}
