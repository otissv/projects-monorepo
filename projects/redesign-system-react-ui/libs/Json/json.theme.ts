import { isFunction } from 'c-ufunc/isFunction'

import { JsonInterface } from './json.types'

export function jsonTheme(props: JsonInterface): Record<string, any> {
  const {
    theme: { Json },
  } = props

  return {
    position: 'relative',
    ...(isFunction(Json) ? Json(props)?.default : Json?.default),
  }
}
