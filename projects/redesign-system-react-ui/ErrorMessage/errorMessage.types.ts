import { ThemeComponentInterface } from '@redesign-system/theme'
import { PRIMARY, SECONDARY, TERTIARY } from '@redesign-system/theme'

type ErrorTypes = typeof PRIMARY | typeof SECONDARY | typeof TERTIARY

export interface ErrorMessageInterface extends ThemeComponentInterface {
  readonly appearance?: ErrorTypes
  readonly children?: React.ReactNode
  readonly href?: string
  readonly required?: boolean
}
