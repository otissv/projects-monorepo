import merge from 'deepmerge'

import { toCamel } from 'ufunc/toCamel'
import { toUpperFirst } from 'ufunc/toUpperFirst'
import { maybe } from 'ufunc/maybe'
import {
  BORDER_NONE,
  BORDER_STYLE,
  BORDER_THICK_WIDTH,
  BORDER_THICK_COLOR,
  BORDER_THIN_WIDTH,
  BORDER_THIN_COLOR,
  PartialBorderInterface,
} from './border.types'
import { PartialThemeInterface } from '../theme'

export function borderTheme<
  P extends PartialThemeInterface,
  T extends PartialBorderInterface
>(theme?: P): T {
  const maybeTheme = maybe({})
  const border: any = maybeTheme(theme?.border)
  const color: any = maybeTheme(theme?.color)

  const thickWidth = border.thickWidth || BORDER_THICK_WIDTH
  const thickColor = border.thickColor || color[BORDER_THICK_COLOR]
  const thinWidth = border.thinWidth || BORDER_THIN_WIDTH
  const thinColor = border.thinColor || color[BORDER_THIN_COLOR]

  const none = BORDER_NONE
  const style = border.style || BORDER_STYLE

  function getColor(value: string) {
    return color[value] || value
  }

  const defaults: Record<string, any> = {
    none,
    style,
    thickWidth,
    thickColor,
    thinWidth,
    thinColor,

    // thick
    thick: `${thickWidth} ${style} ${getColor(thickColor)}`,
    thickInvert: `${thickWidth} ${style} ${getColor(thickColor)}`,
    thickTransparent: `${thickWidth} ${style} rgba(0, 0, 0, 0);`,

    // thin
    thin: `${thinWidth} ${style} ${getColor(thinColor)}`,
    thinInvert: `${thinWidth} ${style} ${getColor(thinColor)}`,
    thinTransparent: `${thinWidth} ${style} rgba(0, 0, 0, 0);`,
  }

  // eslint-disable-next-line functional/no-loop-statement
  for (const key in color) {
    /* eslint-disable functional/immutable-data */
    /* eslint-disable functional/no-expression-statement */

    const colorValue = color[key]
    const upperFirstKey: string = toUpperFirst(toCamel(key))

    defaults[`thick${upperFirstKey}`] = `${thickWidth} ${style} ${colorValue}`
    defaults[`thin${upperFirstKey}`] = `${thinWidth} ${style} ${colorValue}`
  }

  return merge(defaults, border) as T
}
