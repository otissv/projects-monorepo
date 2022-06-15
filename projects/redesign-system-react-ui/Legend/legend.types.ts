import { ThemeComponentInterface } from '@redesign-system/theme'

export interface LegendInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
  readonly legend?: any
}
