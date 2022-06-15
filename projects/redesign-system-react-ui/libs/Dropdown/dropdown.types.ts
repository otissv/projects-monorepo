import { ThemeComponentInterface } from '@redesign-system/theme/libs'

import { ButtonInterface } from '../Button'

export type DropdownInterface = ThemeComponentInterface

export interface DropdownContentInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
  readonly flip?: boolean
  readonly height?: string
  readonly justify?: boolean
  readonly opened?: boolean
  readonly position?: string
  readonly overflow?: 'hidden' | 'visible' | 'scroll' | 'auto'
}

export interface DropdownButtonInterface extends ButtonInterface {
  readonly children?: React.ReactNode
}
