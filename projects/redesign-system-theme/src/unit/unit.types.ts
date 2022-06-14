export const UNIT_0 = '0px'
export const UNIT_2 = '4px'
export const UNIT_3 = '8px'
export const UNIT_4 = '12px'
export const UNIT_5 = '16px'
export const UNIT_6 = '24px'
export const UNIT_7 = '32px'
export const UNIT_8 = '48px'
export const UNIT_9 = '64px'
export const UNIT_10 = '96px'
export const UNIT_11 = '128px'
export const UNIT_12 = '192px'
export const UNIT_13 = '256px'
export const UNIT_14 = '384px'
export const UNIT_15 = '512px'
export const UNIT_16 = '768px'
export const UNIT_17 = '1024px'
export const UNIT_18 = '1024px'
export const UNIT_DEFAULT = '24px'

export interface UnitInterface {
  readonly 0: string
  readonly 1: string
  readonly 2: string
  readonly 3: string
  readonly 4: string
  readonly 5: string
  readonly 6: string
  readonly 7: string
  readonly 8: string
  readonly 9: string
  readonly 10: string
  readonly 11: string
  readonly 12: string
  readonly 13: string
  readonly 14: string
  readonly 15: string
  readonly 16: string
  readonly 17: string
  readonly default: string
}

export interface UnitPositionsInterface {
  readonly unit: UnitInterface
  readonly style: string
}

export type PartialUnitInterface = Partial<UnitInterface>
