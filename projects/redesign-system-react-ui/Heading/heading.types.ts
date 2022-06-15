import { ThemeComponentInterface } from '@redesign-system/theme'
import { TypographyInterface } from '../Typography'

interface ReactChildren {
  readonly children: React.ReactNode
}

export interface HeadingInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
  readonly title?: string | ReactChildren | TypographyInterface
  readonly secondaryTitle?: string | ReactChildren
  readonly image?: {
    readonly src: string
    readonly alt: string
  }
  readonly meta?: any
}
