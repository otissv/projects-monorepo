import {
  ThemeComponentInterface,
  UnitInterface,
} from '@redesign-system/theme/libs'
import { CoverImageInterface } from '../CoverImage'

export interface DoubleContentInterface extends ThemeComponentInterface {
  readonly h?: UnitInterface | string
  readonly w?: UnitInterface | string
  readonly coverImage?: CoverImageInterface
  readonly children?: React.ReactNode
  readonly doubleContentInner?: DoubleContentInnerInterface
}

export type DoubleContentInnerInterface = ThemeComponentInterface
