import { isFunction } from 'ufunc/isFunction'

import { LabelInterface } from './label.types'

export function labelTheme(props: LabelInterface): Record<string, any> {
  const {
    theme: { Label },
  } = props

  return {
    position: 'relative',
    ...(isFunction(Label) ? Label(props)?.default : Label?.default),
  }
}
