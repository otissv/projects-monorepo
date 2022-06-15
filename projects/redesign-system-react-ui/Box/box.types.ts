import { ThemeComponentInterface } from '@redesign-system/theme'

export interface BoxInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
  readonly stretch?: boolean
}
