export const BORDER_NONE = 'none'
export const BORDER_STYLE = 'solid'
export const BORDER_THICK_WIDTH = '2px'
export const BORDER_THICK_COLOR = 'grey_700'
export const BORDER_THIN_WIDTH = '1px'
export const BORDER_THIN_COLOR = 'grey_700'

export interface BorderInterface {
  readonly none: typeof BORDER_NONE | string
  readonly style: typeof BORDER_STYLE | string
  readonly thickWidth: typeof BORDER_THICK_WIDTH | string
  readonly thickColor: typeof BORDER_THICK_COLOR | string
  readonly thinWidth: typeof BORDER_THIN_WIDTH | string
  readonly thinColor: typeof BORDER_THIN_COLOR | string

  readonly thick: string
  readonly thickInvert: string
  readonly thickTransparent: string

  readonly thin: string
  readonly thinInvert: string
  readonly thinTransparent: string
}

export type PartialBorderInterface = Partial<BorderInterface>
