import { ThemeComponentInterface } from '@redesign-system/theme'

export interface FieldsetInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
  readonly legend: string | any
}
