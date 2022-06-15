import { BaseInterface } from '../Base/base.types'
import { utilityStyles } from './utilityStyles'

export function buildCssUtilities(
  props: BaseInterface
): string | readonly string[] {
  return utilityStyles(props)
}
