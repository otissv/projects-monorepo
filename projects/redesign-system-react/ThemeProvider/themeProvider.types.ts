import { ThemeInterface } from '@redesign-system/theme'

export interface ThemeProviderInterface {
  readonly children?: React.ReactNode
  readonly theme?: ThemeInterface | { readonly [key: string]: any }
  readonly isBuilt?: boolean
}
