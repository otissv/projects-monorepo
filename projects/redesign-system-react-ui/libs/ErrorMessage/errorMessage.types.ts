import { ThemeComponentInterface } from '@redesign-system/theme/libs'
import { PRIMARY, SECONDARY, TERTIARY } from '@redesign-system/theme/libs'

type ErrorTypes = typeof PRIMARY | typeof SECONDARY | typeof TERTIARY

export interface ErrorMessageInterface extends ThemeComponentInterface {
  readonly appearance?: ErrorTypes
  readonly children?: Omit<React.ReactNode, 'React.ReactPortal'>
  readonly href?: string
  readonly required?: boolean
}
