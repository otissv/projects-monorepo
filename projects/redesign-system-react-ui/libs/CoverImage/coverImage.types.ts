import { ThemeComponentInterface } from '@redesign-system/theme/libs'

import { CaptionInterface } from '../Caption'
import { OverlayInterface } from '../Overlay'

type colorType = string

export interface CoverImageInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
  readonly cover?: boolean
  readonly height?: string
  readonly overlay?: colorType | OverlayInterface
  readonly parallax?: boolean
  readonly position?: string
  readonly repeat?: boolean
  readonly src?: string
  readonly width?: string
  readonly caption?: string | CaptionInterface
  readonly content?: CoverImageContentInterface
}

export interface CoverImageContentInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
}
