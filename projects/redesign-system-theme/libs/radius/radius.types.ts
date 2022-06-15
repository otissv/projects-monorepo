export const RADIUS_CIRCLE = '100%'
export const RADIUS_NONE = 'none'
export const RADIUS_ROUND = '30px'
export const RADIUS_ROUNDED = '5px'

export type RadiusTypes =
  | typeof RADIUS_CIRCLE
  | typeof RADIUS_NONE
  | typeof RADIUS_ROUND
  | typeof RADIUS_ROUNDED
  | string

export interface RadiusInterface {
  readonly circle: string
  readonly none: string
  readonly round: string
  readonly rounded: string
}

export type PartialRadiusInterface = Partial<RadiusInterface>
