import { ThemeInterface } from '../theme'

export interface GlobalInterface {
  readonly [key: string]: any
}

export interface GlobalStylesInterface {
  readonly css?: any
  readonly theme: Partial<ThemeInterface>
}

export type PartialGlobalInterface = Partial<GlobalInterface>
