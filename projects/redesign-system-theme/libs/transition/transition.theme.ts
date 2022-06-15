import merge from 'deepmerge'
import { maybe } from 'c-ufunc/libs/maybe'
import {
  FAST,
  MEDIUM,
  PartialTransitionInterface,
  SLOW,
  TransitionInterface,
  XSLOW,
} from './transition.types'

import { PartialThemeInterface } from '../theme'

export function transitionTheme<
  P extends PartialThemeInterface,
  T extends PartialTransitionInterface,
>(theme?: P): T {
  const transition: any = maybe({})(theme?.transition)

  const xslow = transition.xslow || XSLOW
  const slow = transition.slow || SLOW
  const medium = transition.medium || MEDIUM
  const fast = transition.fast || FAST

  const defaults: TransitionInterface = {
    xslow,
    slow,
    medium,
    fast,
  }

  return merge(defaults, transition) as T
}
