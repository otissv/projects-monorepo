import { RadioInterface } from '../Radio'
import { ErrorMessageInterface } from '../ErrorMessage'
import { ThemeComponentInterface } from '@redesign-system/theme'
import { LabelInterface } from '../Label'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HelpMessageInterface {}

export type ValidateField = (value: string) => boolean

export interface FormRadioInterface extends ThemeComponentInterface {
  readonly checked?: boolean
  readonly control?: Partial<RadioInterface>
  readonly errorMessage?: string | Partial<ErrorMessageInterface>
  readonly helpMessage?: string | Partial<HelpMessageInterface>
  readonly id: string
  readonly invalid?: boolean
  readonly label?: string | Partial<LabelInterface>
  readonly name: string
  readonly required?: boolean
  readonly touched?: boolean
}
