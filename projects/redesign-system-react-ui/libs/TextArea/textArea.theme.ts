import { isFunction } from 'c-ufunc/isFunction'

import { TextAreaInterface } from './textArea.types'

export function textAreaTheme(props: TextAreaInterface): Record<string, any> {
  const {
    theme: { TextArea },
  } = props

  return {
    position: 'relative',
    ...(isFunction(TextArea) ? TextArea(props)?.default : TextArea?.default),
  }
}
