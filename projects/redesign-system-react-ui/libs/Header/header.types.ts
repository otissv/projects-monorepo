import { ThemeComponentInterface } from '@redesign-system/theme/libs'
import { HeadingInterface } from '../Heading'

export interface HeaderInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
  readonly backgroundImageUrl?: string
  readonly image?: HeaderImageInterface
  readonly headerHeight?: string
  readonly overlay?: string
  readonly heading?: string | HeadingInterface
}

export interface HeaderImageInterface {
  readonly alt: string
  readonly height?: string
  readonly width?: string
  readonly size?: number
  readonly src: string
}
