import { ThemeComponentInterface } from '@redesign-system/theme/libs'

export interface ButtonInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
  readonly active?: boolean
  readonly disabled?: boolean
  readonly onClick?: any
  readonly role?: string
  readonly size?: number
  readonly stretch?: boolean
  readonly type?: string
}
