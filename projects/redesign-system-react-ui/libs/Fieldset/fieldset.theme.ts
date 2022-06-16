import { isFunction } from 'c-ufunc/libs/isFunction'
import { FieldsetInterface } from './fieldset.types'

export function fieldsetTheme(props: FieldsetInterface): Record<string, any> {
  const {
    theme: { font, unit, Fieldset },
  } = props

  return {
    position: 'relative',
    border: 'none',
    margin: '0',
    padding: '0',

    legend: {
      fontWeight: font.weight[4],
      width: '100%',
      marginBottom: unit[3],
      paddingBottom: unit[2],
    },

    ...(isFunction(Fieldset) ? Fieldset(props)?.default : Fieldset?.default),
  }
}
