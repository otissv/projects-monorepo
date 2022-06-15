import { CreateThemeInterface } from '../theme'
import { BorderInterface, borderTheme } from '../border'
import { ColorInterface, colorTheme } from '../color'
import { ElevateInterface, elevateTheme } from '../elevate'
import { FontInterface, fontTheme } from '../font'
import { RadiusInterface, radiusTheme } from '../radius'
import { scrollbarTheme } from '../scrollbar'
import { transitionTheme, TransitionInterface } from '../transition'
import { UnitInterface, unitTheme } from '../unit'
import { UtilityInterface, utilityTheme } from '../utility'
import { GlobalInterface, globalTheme } from '../global'
import {
  BreakpointsInterface,
  breakpointsTheme,
  MediaQueriesInterface,
  mediaQueriesTheme,
} from '../mediaQueries'
import { SwatchesInterface } from '../swatches'

export function createTheme(partialTheme: CreateThemeInterface = {}): {
  readonly color: Partial<ColorInterface>
  readonly unit: Partial<UnitInterface>
  readonly breakpoints: Partial<BreakpointsInterface>
  readonly mediaQueries: Partial<MediaQueriesInterface>
  readonly global: Partial<GlobalInterface>
  readonly border: Partial<BorderInterface>
  readonly elevate: Partial<ElevateInterface>
  readonly font: Partial<FontInterface>
  readonly radius: Partial<RadiusInterface>
  readonly transition: Partial<TransitionInterface>
  readonly utility: Partial<UtilityInterface>
  readonly swatches?: Partial<SwatchesInterface>
} {
  const _color = colorTheme(partialTheme)
  const _unit = unitTheme(partialTheme)
  const _breakpoints = breakpointsTheme(partialTheme)

  const defaultTheme = {
    ...partialTheme,
    color: _color,
    unit: _unit,
    breakpoints: _breakpoints,
  }

  const baseTheme = {
    ...defaultTheme,
    border: borderTheme(defaultTheme),
    elevate: elevateTheme(defaultTheme),
    font: fontTheme(defaultTheme),
    mediaQueries: mediaQueriesTheme(defaultTheme),
    radius: radiusTheme(defaultTheme),
    scrollbar: scrollbarTheme(defaultTheme),
    transition: transitionTheme(defaultTheme),
  }

  return {
    ...baseTheme,
    global: globalTheme(baseTheme),
    utility: utilityTheme(baseTheme),
  }
}
