import { isFunction } from 'c-ufunc/isFunction'
import { FormTextBoxInterface } from './formTextbox.types'

export function formTextboxTheme(
  props: FormTextBoxInterface
): Record<string, any> {
  const {
    theme: { FormTextBox },
  } = props

  return {
    position: 'relative',
    ...(isFunction(FormTextBox)
      ? FormTextBox(props)?.default
      : FormTextBox?.default),
  }
}
