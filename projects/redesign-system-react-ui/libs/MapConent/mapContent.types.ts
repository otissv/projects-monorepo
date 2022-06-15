import {
  ThemeComponentInterface,
  UnitInterface,
} from '@redesign-system/theme/libs'
import { GoogleMapsInterface } from '../GoogleMaps'

export interface MapContentInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
  readonly googleMaps?: GoogleMapsInterface
  readonly location?: string
  readonly mapContentInner?: MapContentInnerInterface
  readonly w?: UnitInterface | string
  readonly h?: UnitInterface | string
}

export type MapContentInnerInterface = ThemeComponentInterface
