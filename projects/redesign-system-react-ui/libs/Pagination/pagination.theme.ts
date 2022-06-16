import { isFunction } from 'c-ufunc/libs/isFunction'

import { PaginationInterface } from './pagination.types'

export function paginationTheme(
  props: PaginationInterface
): Record<string, any> {
  const {
    theme: { Pagination },
  } = props

  return {
    position: 'relative',
    ...(isFunction(Pagination)
      ? Pagination(props)?.default
      : Pagination?.default),
  }
}
