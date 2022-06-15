import { ThemeComponentInterface } from '@redesign-system/theme'
export interface JsonInterface extends ThemeComponentInterface {
  readonly data:
    | readonly any[]
    | { readonly [key: string]: any }
    | { readonly [key: number]: any }
}
