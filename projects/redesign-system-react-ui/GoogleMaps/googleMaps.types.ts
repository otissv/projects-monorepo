import { ThemeComponentInterface } from '@redesign-system/theme'

export interface GoogleMapsInterface extends ThemeComponentInterface {
  readonly location?: string
  readonly height?: string
  readonly width?: string
  readonly zoom?: number
}
