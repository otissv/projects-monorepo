import { isFunction } from 'ufunc/isFunction'
import { FormCheckboxInterface } from './formCheckbox.types'

export function formCheckboxTheme(
  props: FormCheckboxInterface
): Record<string, any> {
  const {
    theme: { FormCheckbox },
  } = props

  return {
    position: 'relative',
    ...(isFunction(FormCheckbox)
      ? FormCheckbox(props)?.default
      : FormCheckbox?.default),
  }
}
