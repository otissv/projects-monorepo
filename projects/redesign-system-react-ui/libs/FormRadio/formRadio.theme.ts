import { isFunction } from 'c-ufunc/isFunction'
import { FormRadioInterface } from './formRadio.types'

export function formRadioTheme(props: FormRadioInterface): Record<string, any> {
  const {
    theme: { FormRadio },
  } = props

  return {
    position: 'relative',
    ...(isFunction(FormRadio) ? FormRadio(props)?.default : FormRadio?.default),
  }
}
