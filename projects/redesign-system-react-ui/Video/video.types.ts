import { ThemeComponentInterface } from '@redesign-system/theme'

export type PreloadType = 'none' | 'metadata' | 'auto'

export interface VideoInterface extends ThemeComponentInterface {
  readonly allowFullScreen?: boolean
  readonly autoplay?: boolean
  readonly controls?: boolean
  readonly embeded?: boolean
  readonly height?: string
  readonly intrinsicsize?: string
  readonly inview?: boolean
  readonly loop?: boolean
  readonly muted?: boolean
  readonly playsinline?: boolean
  readonly preload?: PreloadType
  readonly src?: string
  readonly width?: string
}
