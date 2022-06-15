import { CheckboxInterface } from '../Checkbox'
import { ErrorMessageInterface } from '../ErrorMessage'
import { ThemeComponentInterface } from '@redesign-system/theme'
import { LabelInterface } from '../Label'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HelpMessageInterface {}

export type ValidateField = (value: string) => boolean

export interface FormCheckboxInterface extends ThemeComponentInterface {
  readonly control?: Partial<CheckboxInterface>
  readonly errorMessage?: string | Partial<ErrorMessageInterface>
  readonly helpMessage?: string | Partial<HelpMessageInterface>
  readonly id: string
  readonly invalid?: boolean
  readonly label?: string | Partial<LabelInterface>
  readonly required?: boolean
  readonly touched?: boolean
  readonly checked?: boolean
}
