import merge from 'deepmerge'
import { maybe } from 'c-ufunc/libs/maybe'

import { swatches as palette } from '../swatches'
import { ColorInterface, PartialColorInterface } from './color.types'
import { PartialThemeInterface } from '../theme'

function getDefaultColor(swatches: any) {
  return ({
    fallback,
    color,
  }: {
    readonly fallback: string
    readonly color: string
  }) => {
    if (color) {
      return swatches[color] || color
    } else {
      return fallback
    }
  }
}

export function colorTheme<
  P extends PartialThemeInterface,
  T extends PartialColorInterface
>(theme?: P): T {
  const maybeTheme = maybe({})
  const hostSwatches: any = maybeTheme(theme?.swatches)
  const _swatches = merge(hostSwatches, palette)

  const getColor = getDefaultColor(_swatches)

  const {
    accent: hostAccent,
    action: hostAction,
    active: hostActive,
    background: hostBackground,
    danger: hostDanger,
    default: hostDefault,
    error: hostError,
    disabled: hostDisabled,
    success: hostSuccess,
    warning: hostWarning,
    grey: hostGrey,

    text: hostText,
    backgroundInvert: hostBackgroundInvert,
    textInvert: hostTextInvert,
    defaults: colorDefaults,
    ...hostColors
  }: any = maybeTheme(theme?.color)

  const color = {
    accent: hostAccent || 'pink',
    action: hostAction || 'blue',
    active: hostActive || 'pink',
    background: hostBackground || 'night_blue',
    danger: hostDanger || 'red',
    error: hostError || 'red',
    default: hostDefault || 'grey',
    disabled: hostDisabled || 'grey',
    success: hostSuccess || 'green',
    warning: hostWarning || 'yellow',
    grey: hostGrey || 'grey',

    text: hostText || 'grey_050',
    backgroundInvert: hostBackgroundInvert || 'grey_050',
    textInvert: hostTextInvert || 'night_blue_700',
  }

  const colors: ColorInterface = {
    black: '#000',
    white: '#fff',
    transparent: 'rgba(0, 0, 0, 0)',

    outline: colorDefaults?.outline || '#006dea',

    text: colorDefaults?.text || _swatches[color['text']],
    textInvert: colorDefaults?.textInvert || _swatches[color['textInvert']],

    linkText: colorDefaults?.linkText || '#4ea1f3',
    linkTextHover: colorDefaults?.linkTextHover || '#4ea1f3',
    linkTextActive: colorDefaults?.linkTextActive || '#4ea1f3',
    linkTextFocus: colorDefaults?.linkTextFocus || '#4ea1f3',
    linkTextVisited: colorDefaults?.linkTextVisited || '#4ea1f3',
    linkBackground: colorDefaults?.linkBackground || '#4ea1f3',
    linkBackgroundHover: colorDefaults?.linkBackgroundHover || '#4ea1f3',
    linkBackgroundActive: colorDefaults?.linkBackgroundActive || '#4ea1f3',
    linkBackgroundFocus: colorDefaults?.linkBackgroundFocus || '#4ea1f3',
    linkBackgroundVisited: colorDefaults?.linkBackgroundVisited || '#4ea1f3',

    background: getColor({
      fallback: _swatches[`${color['background']}_600`],
      color: colorDefaults?.background,
    }),
    backgroundInvert: getColor({
      fallback: _swatches[color['backgroundInvert']],
      color: colorDefaults?.backgroundInvert,
    }),
    background_050: _swatches[`${color['background']}_050`],
    background_100: _swatches[`${color['background']}_100`],
    background_200: _swatches[`${color['background']}_200`],
    background_300: _swatches[`${color['background']}_300`],
    background_400: _swatches[`${color['background']}_400`],
    background_500: _swatches[`${color['background']}_500`],
    background_600: _swatches[`${color['background']}_600`],
    background_700: _swatches[`${color['background']}_700`],
    background_800: _swatches[`${color['background']}_800`],
    background_900: _swatches[`${color['background']}_900`],

    default: getColor({
      fallback: _swatches[`${color['default']}_600`],
      color: colorDefaults?.default,
    }),

    default2: getColor({
      fallback: _swatches[`${color['default']}_500`],
      color: colorDefaults?.default,
    }),
    default_050: _swatches[`${color['default']}_050`],
    default_100: _swatches[`${color['default']}_100`],
    default_200: _swatches[`${color['default']}_200`],
    default_300: _swatches[`${color['default']}_300`],
    default_400: _swatches[`${color['default']}_400`],
    default_500: _swatches[`${color['default']}_500`],
    default_600: _swatches[`${color['default']}_600`],
    default_700: _swatches[`${color['default']}_700`],
    default_800: _swatches[`${color['default']}_800`],
    default_900: _swatches[`${color['default']}_900`],

    grey: getColor({
      fallback: _swatches[`${color['grey']}_600`],
      color: colorDefaults?.grey,
    }),
    grey2: getColor({
      fallback: _swatches[`${color['grey']}_500`],
      color: colorDefaults?.grey,
    }),
    grey_050: _swatches[`${color['grey']}_050`],
    grey_100: _swatches[`${color['grey']}_100`],
    grey_200: _swatches[`${color['grey']}_200`],
    grey_300: _swatches[`${color['grey']}_300`],
    grey_400: _swatches[`${color['grey']}_400`],
    grey_500: _swatches[`${color['grey']}_500`],
    grey_600: _swatches[`${color['grey']}_600`],
    grey_700: _swatches[`${color['grey']}_700`],
    grey_800: _swatches[`${color['grey']}_800`],
    grey_900: _swatches[`${color['grey']}_900`],

    active: getColor({
      fallback: _swatches[`${color['active']}_600`],
      color: colorDefaults?.active,
    }),
    active2: getColor({
      fallback: _swatches[`${color['active']}_500`],
      color: colorDefaults?.active,
    }),
    active_050: _swatches[`${color['active']}_050`],
    active_100: _swatches[`${color['active']}_100`],
    active_200: _swatches[`${color['active']}_200`],
    active_300: _swatches[`${color['active']}_300`],
    active_400: _swatches[`${color['active']}_400`],
    active_500: _swatches[`${color['active']}_500`],
    active_600: _swatches[`${color['active']}_600`],
    active_700: _swatches[`${color['active']}_700`],
    active_800: _swatches[`${color['active']}_800`],
    active_900: _swatches[`${color['active']}_900`],

    accent: getColor({
      fallback: _swatches[`${color['accent']}_600`],
      color: colorDefaults?.accent,
    }),
    accent2: getColor({
      fallback: _swatches[`${color['accent']}_500`],
      color: colorDefaults?.accent,
    }),
    accent_050: _swatches[`${color['accent']}_050`],
    accent_100: _swatches[`${color['accent']}_100`],
    accent_200: _swatches[`${color['accent']}_200`],
    accent_300: _swatches[`${color['accent']}_300`],
    accent_400: _swatches[`${color['accent']}_400`],
    accent_500: _swatches[`${color['accent']}_500`],
    accent_600: _swatches[`${color['accent']}_600`],
    accent_700: _swatches[`${color['accent']}_700`],
    accent_800: _swatches[`${color['accent']}_800`],
    accent_900: _swatches[`${color['accent']}_900`],

    action: getColor({
      fallback: _swatches[`${color['action']}_600`],
      color: colorDefaults?.action,
    }),
    action2: getColor({
      fallback: _swatches[`${color['action']}_500`],
      color: colorDefaults?.action,
    }),
    action_050: _swatches[`${color['action']}_050`],
    action_100: _swatches[`${color['action']}_100`],
    action_200: _swatches[`${color['action']}_200`],
    action_300: _swatches[`${color['action']}_300`],
    action_400: _swatches[`${color['action']}_400`],
    action_500: _swatches[`${color['action']}_500`],
    action_600: _swatches[`${color['action']}_600`],
    action_700: _swatches[`${color['action']}_700`],
    action_800: _swatches[`${color['action']}_800`],
    action_900: _swatches[`${color['action']}_900`],

    danger: getColor({
      fallback: _swatches[`${color['danger']}_600`],
      color: colorDefaults?.danger,
    }),
    danger2: getColor({
      fallback: _swatches[`${color['danger']}_500`],
      color: colorDefaults?.danger,
    }),
    danger_050: _swatches[`${color['danger']}_050`],
    danger_100: _swatches[`${color['danger']}_100`],
    danger_200: _swatches[`${color['danger']}_200`],
    danger_300: _swatches[`${color['danger']}_300`],
    danger_400: _swatches[`${color['danger']}_400`],
    danger_500: _swatches[`${color['danger']}_500`],
    danger_600: _swatches[`${color['danger']}_600`],
    danger_700: _swatches[`${color['danger']}_700`],
    danger_800: _swatches[`${color['danger']}_800`],
    danger_900: _swatches[`${color['danger']}_900`],

    error: getColor({
      fallback: _swatches[`${color['error']}_600`],
      color: colorDefaults?.error,
    }),
    error2: getColor({
      fallback: _swatches[`${color['error']}_500`],
      color: colorDefaults?.error,
    }),
    error_050: _swatches[`${color['error']}_050`],
    error_100: _swatches[`${color['error']}_100`],
    error_200: _swatches[`${color['error']}_200`],
    error_300: _swatches[`${color['error']}_300`],
    error_400: _swatches[`${color['error']}_400`],
    error_500: _swatches[`${color['error']}_500`],
    error_600: _swatches[`${color['error']}_600`],
    error_700: _swatches[`${color['error']}_700`],
    error_800: _swatches[`${color['error']}_800`],
    error_900: _swatches[`${color['error']}_900`],

    success: getColor({
      fallback: _swatches[`${color['success']}_600`],
      color: colorDefaults?.success,
    }),
    success2: getColor({
      fallback: _swatches[`${color['success']}_500`],
      color: colorDefaults?.success,
    }),
    success_050: _swatches[`${color['success']}_050`],
    success_100: _swatches[`${color['success']}_100`],
    success_200: _swatches[`${color['success']}_200`],
    success_300: _swatches[`${color['success']}_300`],
    success_400: _swatches[`${color['success']}_400`],
    success_500: _swatches[`${color['success']}_500`],
    success_600: _swatches[`${color['success']}_600`],
    success_700: _swatches[`${color['success']}_700`],
    success_800: _swatches[`${color['success']}_800`],
    success_900: _swatches[`${color['success']}_900`],

    warning: getColor({
      fallback: _swatches[`${color['warning']}_600`],
      color: colorDefaults?.warning,
    }),
    warning2: getColor({
      fallback: _swatches[`${color['warning']}_500`],
      color: colorDefaults?.warning,
    }),
    warning_050: _swatches[`${color['warning']}_050`],
    warning_100: _swatches[`${color['warning']}_100`],
    warning_200: _swatches[`${color['warning']}_200`],
    warning_300: _swatches[`${color['warning']}_300`],
    warning_400: _swatches[`${color['warning']}_400`],
    warning_500: _swatches[`${color['warning']}_500`],
    warning_600: _swatches[`${color['warning']}_600`],
    warning_700: _swatches[`${color['warning']}_700`],
    warning_800: _swatches[`${color['warning']}_800`],
    warning_900: _swatches[`${color['warning']}_900`],

    disabled: getColor({
      fallback: _swatches[`${color['disabled']}_600`],
      color: colorDefaults?.disabled,
    }),
    disabled2: getColor({
      fallback: _swatches[`${color['disabled']}_500`],
      color: colorDefaults?.disabled,
    }),
    disabled_050: _swatches[`${color['disabled']}_050`],
    disabled_100: _swatches[`${color['disabled']}_100`],
    disabled_200: _swatches[`${color['disabled']}_200`],
    disabled_300: _swatches[`${color['disabled']}_300`],
    disabled_400: _swatches[`${color['disabled']}_400`],
    disabled_500: _swatches[`${color['disabled']}_500`],
    disabled_600: _swatches[`${color['disabled']}_600`],
    disabled_700: _swatches[`${color['disabled']}_700`],
    disabled_800: _swatches[`${color['disabled']}_800`],
    disabled_900: _swatches[`${color['disabled']}_900`],
    ...hostColors,
    ..._swatches,
  }

  return colors as T
}
