import { ThemeInterface, CssTypes } from '@redesign-system/theme/libs'
import { AnimateInterface } from '../Base'

export interface MatchInterface {
  readonly animate?: string
  readonly children: React.ReactNode
  readonly animations?: {
    readonly [key: string]: { readonly [key: string]: AnimateInterface }
  }
  readonly theme?: Partial<ThemeInterface>
  readonly css?: CssTypes
  readonly [key: string]: any
}
