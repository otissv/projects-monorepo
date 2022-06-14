export type FontLetterSpacingType = string
export interface FontLineHeightInterface {
  readonly 0: 0
  readonly 1: number
  readonly 2: number
  readonly 3: number
  readonly 4: number
  readonly 5: number
  readonly 6: number
  readonly default: number
}

export type FontSizeType = {
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
  readonly default: string
  readonly base: string
}
export type FontSmoothType = string
export type FontWeightType = {
  readonly 1: number
  readonly 2: number
  readonly 3: number
  readonly 4: number
  readonly 5: number
  readonly 6: number
  readonly default: number
}

export interface FontFamilyInterface {
  readonly sans: string
  readonly serif: string
  readonly mono: string
}

export type FontFamilyTypes = 'sans' | 'serif' | 'mono' | string
export type FontVariantNumericTypes =
  | 'normal'
  | 'ordinal'
  | 'slashed-zero'
  | 'lining-nums'
  | 'oldstyle-nums'
  | 'proportional-nums'
  | 'tabular-nums'
  | 'diagonal-fractions'
  | 'stacked-fractions'
  | string

export interface FontInterface {
  readonly base: number
  readonly family: FontFamilyInterface
  readonly color: string
  readonly colorInvert: string
  readonly letterSpacing: FontLetterSpacingType
  readonly lineHeight: FontLineHeightInterface

  readonly size: FontSizeType
  readonly smooth: FontSmoothType
  readonly weight: FontWeightType
}

export type PartialFontInterface = Partial<FontInterface>
