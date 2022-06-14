/* eslint-disable functional/no-mixed-type */
export interface BreakpointsInterface {
  readonly sm: { readonly min: number; readonly max: number }
  readonly md: { readonly min: number; readonly max: number }
  readonly lg: { readonly min: number; readonly max: number }
  readonly xl: { readonly min: number; readonly max: number }
  readonly [key: string]: { readonly min: number; readonly max: number }
}

export type PartialBreakpointsInterface = Partial<BreakpointsInterface>

export interface MediaQueriesInterface {
  readonly sm: { readonly min: string; readonly max: string }
  readonly md: { readonly min: string; readonly max: string }
  readonly lg: { readonly min: string; readonly max: string }
  readonly xl: { readonly min: string; readonly max: string }
  readonly [key: string]: { readonly min: string; readonly max: string }
}

export type PartialMediaQueriesInterface = Partial<MediaQueriesInterface>
