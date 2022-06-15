import { isFunction } from 'ufunc/isFunction'
import { HeaderInterface } from './header.types'

export function headerTheme(props: HeaderInterface): Record<string, any> {
  const {
    theme: { Header },
  } = props

  return {
    position: 'relative',
    ...(isFunction(Header) ? Header(props)?.default : Header?.default),
  }
}
