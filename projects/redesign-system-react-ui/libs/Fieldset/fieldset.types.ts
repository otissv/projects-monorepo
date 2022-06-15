import { ThemeComponentInterface } from '@redesign-system/theme/libs'

export interface FieldsetInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
  readonly legend: string | any
}
