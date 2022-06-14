export interface ColorInterface {
  readonly defaults?: { readonly [key: string]: string }
  readonly text: string
  readonly textInvert: string
  readonly transparent: string

  readonly black: string
  readonly white: string
  readonly outline: string

  readonly linkText: string
  readonly linkTextHover: string
  readonly linkTextActive: string
  readonly linkTextFocus: string
  readonly linkTextVisited: string
  readonly linkBackground: string
  readonly linkBackgroundHover: string
  readonly linkBackgroundActive: string
  readonly linkBackgroundFocus: string
  readonly linkBackgroundVisited: string

  readonly background: string
  readonly backgroundInvert: string
  readonly background_050: string
  readonly background_100: string
  readonly background_200: string
  readonly background_300: string
  readonly background_400: string
  readonly background_500: string
  readonly background_600: string
  readonly background_700: string
  readonly background_800: string
  readonly background_900: string

  readonly default: string
  readonly default2: string
  readonly default_050: string
  readonly default_100: string
  readonly default_200: string
  readonly default_300: string
  readonly default_400: string
  readonly default_500: string
  readonly default_600: string
  readonly default_700: string
  readonly default_800: string
  readonly default_900: string

  readonly grey: string
  readonly grey2: string
  readonly grey_050: string
  readonly grey_100: string
  readonly grey_200: string
  readonly grey_300: string
  readonly grey_400: string
  readonly grey_500: string
  readonly grey_600: string
  readonly grey_700: string
  readonly grey_800: string
  readonly grey_900: string

  readonly active: string
  readonly active2: string
  readonly active_050: string
  readonly active_100: string
  readonly active_200: string
  readonly active_300: string
  readonly active_400: string
  readonly active_500: string
  readonly active_600: string
  readonly active_700: string
  readonly active_800: string
  readonly active_900: string

  readonly accent: string
  readonly accent2: string
  readonly accent_050: string
  readonly accent_100: string
  readonly accent_200: string
  readonly accent_300: string
  readonly accent_400: string
  readonly accent_500: string
  readonly accent_600: string
  readonly accent_700: string
  readonly accent_800: string
  readonly accent_900: string

  readonly action: string
  readonly action2: string
  readonly action_050: string
  readonly action_100: string
  readonly action_200: string
  readonly action_300: string
  readonly action_400: string
  readonly action_500: string
  readonly action_600: string
  readonly action_700: string
  readonly action_800: string
  readonly action_900: string

  readonly error: string
  readonly error2: string
  readonly error_050: string
  readonly error_100: string
  readonly error_200: string
  readonly error_300: string
  readonly error_400: string
  readonly error_500: string
  readonly error_600: string
  readonly error_700: string
  readonly error_800: string
  readonly error_900: string

  readonly danger: string
  readonly danger2: string
  readonly danger_050: string
  readonly danger_100: string
  readonly danger_200: string
  readonly danger_300: string
  readonly danger_400: string
  readonly danger_500: string
  readonly danger_600: string
  readonly danger_700: string
  readonly danger_800: string
  readonly danger_900: string

  readonly warning: string
  readonly warning2: string
  readonly warning_050: string
  readonly warning_100: string
  readonly warning_200: string
  readonly warning_300: string
  readonly warning_400: string
  readonly warning_500: string
  readonly warning_600: string
  readonly warning_700: string
  readonly warning_800: string
  readonly warning_900: string

  readonly success: string
  readonly success2: string
  readonly success_050: string
  readonly success_100: string
  readonly success_200: string
  readonly success_300: string
  readonly success_400: string
  readonly success_500: string
  readonly success_600: string
  readonly success_700: string
  readonly success_800: string
  readonly success_900: string

  readonly disabled: string
  readonly disabled2: string
  readonly disabled_050: string
  readonly disabled_100: string
  readonly disabled_200: string
  readonly disabled_300: string
  readonly disabled_400: string
  readonly disabled_500: string
  readonly disabled_600: string
  readonly disabled_700: string
  readonly disabled_800: string
  readonly disabled_900: string
}

export type PartialColorInterface = Partial<ColorInterface>
