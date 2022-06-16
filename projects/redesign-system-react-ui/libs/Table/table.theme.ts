import { isFunction } from 'c-ufunc/libs/isFunction'

import { TableInterface } from './table.types'

export function tableTheme(props: TableInterface): Record<string, any> {
  const {
    // condensed,
    // hover,
    theme: {
      //  transition, border, color, elevate, unit,
      Table,
    },
  } = props

  return {
    ...(isFunction(Table) ? Table(props)?.default : Table?.default),
  }
}
