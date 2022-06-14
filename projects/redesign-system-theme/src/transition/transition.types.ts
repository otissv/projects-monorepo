export const XSLOW = '3s'
export const SLOW = '0.5s'
export const MEDIUM = '0.3s'
export const FAST = '0.1s'

export type TransitionSpeedTypes =
  | typeof XSLOW
  | typeof SLOW
  | typeof MEDIUM
  | typeof FAST

export interface TransitionInterface {
  readonly xslow: typeof XSLOW | string
  readonly slow: typeof SLOW | string
  readonly medium: typeof MEDIUM | string
  readonly fast: typeof FAST
}

export type PartialTransitionInterface = Partial<TransitionInterface>
