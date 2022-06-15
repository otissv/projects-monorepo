import { TextboxInterface } from '../Textbox'
import { ErrorMessageInterface } from '../ErrorMessage'
import { ThemeComponentInterface } from '@redesign-system/theme'
import { LabelInterface } from '../Label'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HelpMessageInterface {}

export type ValidateField = (value: string) => boolean

export interface FormTextBoxInterface extends ThemeComponentInterface {
  readonly control?: Partial<TextboxInterface>
  readonly errorMessage?: string | Partial<ErrorMessageInterface>
  readonly helpMessage?: string | Partial<HelpMessageInterface>
  readonly id: string
  readonly invalid?: boolean
  readonly label?: string | Partial<LabelInterface>
  readonly placeholder?: string
  readonly required?: boolean
  readonly touched?: boolean
  readonly value?: string
}
