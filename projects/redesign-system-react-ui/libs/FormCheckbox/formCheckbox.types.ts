import { CheckboxInterface } from '../Checkbox'
import { ErrorMessageInterface } from '../ErrorMessage'
import { ThemeComponentInterface } from '@redesign-system/theme/libs'
import { LabelInterface } from '../Label'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FormCheckboxHelpMessageInterface {
  readonly required?: boolean
}

export interface FormCheckboxInterface extends ThemeComponentInterface {
  readonly control?: Partial<CheckboxInterface>
  readonly errorMessage?: string | Partial<ErrorMessageInterface>
  readonly helpMessage?: string | Partial<FormCheckboxHelpMessageInterface>
  readonly id: string
  readonly invalid?: boolean
  readonly label?: string | Partial<LabelInterface>
  readonly required?: boolean
  readonly touched?: boolean
  readonly checked?: boolean
}
