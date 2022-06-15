import { ButtonInterface } from '../Button'
import { ButtonIconInterface } from '../ButtonIcon'

export interface ButtonGroupInterface extends ButtonInterface {
  readonly children?: React.ReactNode
}

export interface ButtonGroupButtonInterface extends ButtonInterface {
  readonly children?: React.ReactNode
  readonly active?: boolean
  readonly onClick?: any
}

export interface ButtonGroupButtonIconInterface extends ButtonIconInterface {
  readonly children?: React.ReactNode
  readonly active?: boolean
  readonly onClick?: any
}
