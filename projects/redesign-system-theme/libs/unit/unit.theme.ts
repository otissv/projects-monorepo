import merge from 'deepmerge'
import { UnitInterface, PartialUnitInterface } from './unit.types'
import { PartialThemeInterface } from '../theme'

export function unitTheme<
  P extends PartialThemeInterface,
  T extends PartialUnitInterface,
>(theme?: P): T {
  const unit = theme?.unit || {}

  const defaults: UnitInterface = {
    0: '0px',
    1: '1px',
    2: '4px',
    3: '8px',
    4: '12px',
    5: '16px',
    6: '24px',
    7: '32px',
    8: '48px',
    9: '64px',
    10: '96px',
    11: '128px',
    12: '192px',
    13: '256px',
    14: '384px',
    15: '512px',
    16: '768px',
    17: '1024px',
    default: '24px',
  }

  return merge(defaults, unit) as T
}
