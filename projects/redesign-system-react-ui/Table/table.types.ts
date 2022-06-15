import { ThemeComponentInterface } from '@redesign-system/theme'

export interface TableInterface extends ThemeComponentInterface {
  readonly condensed?: boolean
  readonly hover?: boolean
  readonly onSelect?: any
}
