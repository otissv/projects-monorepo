import merge from 'deepmerge'

import {
  BreakpointsInterface,
  PartialBreakpointsInterface,
  PartialMediaQueriesInterface,
} from './mediaQueries.theme.types'
import { PartialThemeInterface } from '../theme'
import { maybe } from 'c-ufunc/libs/maybe'

export function breakpointsTheme<
  P extends PartialThemeInterface,
  T extends PartialBreakpointsInterface,
>(theme: P): T {
  const breakpoints: any = maybe({})(theme?.breakpoints)

  const defaults: BreakpointsInterface = {
    sm: { min: 640, max: 767 },
    md: { min: 768, max: 1023 },
    lg: { min: 1024, max: 1279 },
    xl: { min: 1280, max: 1535 },
  }

  return merge(defaults, breakpoints) as T
}

export function mediaQueriesTheme<
  P extends PartialThemeInterface,
  T extends PartialMediaQueriesInterface,
>(theme: P): T {
  const mediaQueries: any = maybe({})(theme?.mediaQueries)
  const breakpoints: any = maybe({})(theme?.breakpoints)

  const defaults: any = {}

  // eslint-disable-next-line functional/no-loop-statement
  for (const key in breakpoints) {
    /* eslint-disable functional/no-expression-statement */
    /* eslint-disable functional/immutable-data */
    const breakpoint = breakpoints[key]

    defaults[key] = {
      ...(breakpoint.min
        ? { min: `@media(min-width: ${breakpoint.min}px)` }
        : {}),
      ...(breakpoint.max
        ? { max: `@media(max-width: ${breakpoint.max}px)` }
        : {}),
    }
  }

  return merge(defaults, mediaQueries) as T
}
