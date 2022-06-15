import { HeaderInterface } from '../Header'
import { CssTypes } from '@redesign-system/theme/libs'

export interface LayoutInterface {
  readonly as?: string
  readonly children?: React.ReactNode
  readonly className?: string
  readonly css?: CssTypes
  readonly customHeader?: React.ReactNode
  readonly footer?: React.ReactNode
  readonly header?: HeaderInterface
  readonly seo?: any
}
