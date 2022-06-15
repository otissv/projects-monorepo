import { ThemeComponentInterface } from '@redesign-system/theme'

export interface AlertInterface extends ThemeComponentInterface {
  readonly stretch?: boolean
  readonly children?: React.ReactNode
  readonly opened?: boolean
}
