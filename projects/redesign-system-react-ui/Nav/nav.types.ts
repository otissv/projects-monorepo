import { ThemeComponentInterface } from '@redesign-system/theme'
import { ButtonInterface } from '../Button'

export type NavInterface = ThemeComponentInterface

export interface NavItemInterface extends ThemeComponentInterface {
  readonly stacked?: boolean | undefined
  readonly children?: React.ReactNode
}

export interface NavIconInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
  readonly active?: boolean
}

export type NavItemButtonInterface = ButtonInterface
