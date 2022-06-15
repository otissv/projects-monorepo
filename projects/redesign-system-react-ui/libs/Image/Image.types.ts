import { ThemeComponentInterface } from '@redesign-system/theme/libs'

export interface ImageResponsiveInterface {
  readonly alt: string
  readonly height?: string
  readonly width?: string
  readonly size?: number
  readonly src: string
}

export interface ImageInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
  readonly alt: string
  readonly height?: string
  readonly width?: string
  readonly widths?: number
  readonly src: string
}
