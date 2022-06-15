/* eslint-disable functional/no-return-void */
import {
  ThemeComponentInterface,
  AppearanceBaseTypes,
} from '@redesign-system/theme'

export interface RadioInterface extends ThemeComponentInterface {
  readonly appearance?: AppearanceBaseTypes
  readonly checked?: boolean
  readonly id: string
  readonly label: string
  readonly disabled?: boolean
  readonly name?: string
  readonly onBlur?: (e: React.SyntheticEvent<EventTarget>) => void
  readonly onChange?: (e: React.SyntheticEvent<EventTarget>) => void
  readonly onFocus?: (e: React.SyntheticEvent<EventTarget>) => void
}
