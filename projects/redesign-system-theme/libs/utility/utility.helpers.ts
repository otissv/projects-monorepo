import facepaint, { DynamicStyle } from 'facepaint'

import { maybeString } from 'c-ufunc/libs/maybeString'
import { toCamel } from 'c-ufunc/libs/toCamel'
import { toUpperFirst } from 'c-ufunc/libs/toUpperFirst'

import {
  RADIUS_CIRCLE,
  RADIUS_NONE,
  RADIUS_ROUND,
  RADIUS_ROUNDED,
  RadiusInterface,
} from '../radius/radius.types'
import { BorderInterface } from '../border/border.types'
import { ElevateInterface } from '../elevate/elevate.types'
import { ColorInterface } from '../color/color.types'
import { UnitInterface, UnitPositionsInterface } from '../unit/unit.types'
import {
  FontFamilyTypes,
  FontLineHeightInterface,
  FontSizeType,
  FontWeightType,
} from '../font'
import {
  FlexDirectionTypes,
  FlexContentTypes,
  FlexItemsTypes,
  FlexSelfTypes,
  FlexWrapTypes,
  AppearanceCssTypes,
  PointerEventsTypes,
  ResizeTypes,
  UserSelectTypes,
  CursorTypes,
  ColorTypes,
  BorderStyleTypes,
  BackgroundSizeTypes,
  BackgroundRepeatTypes,
  BackgroundClipTypes,
  BackgroundAttachmentTypes,
  BackgroundPositionTypes,
  WordBreakTypes,
  FloatTypes,
  OverflowTypes,
  OverflowScrollingTypes,
  OverflowWrapTypes,
  VisibilityTypes,
  TextAlignTypes,
  ListStyleTypes,
  ListPositionTypes,
  TextDecorationTypes,
  TextTransformTypes,
  VerticalAlignTypes,
  WhiteSpaceTypes,
  PositionTypes,
  ObjectFitTypes,
  ObjectPositionTypes,
  BoxSizingTypes,
  DisplayTypes,
  TransitionTypes,
  TransitionEaseInterface,
} from './utility.types'
import { getAlias } from './utility.alias'
import { BreakpointsInterface } from '../mediaQueries/mediaQueries.theme.types'
import { FontInterface } from '../font/font.types'
import { MEDIUM } from '../transition/transition.types'

/**
 * Transform a string to prop case
 * @param key - string
 * @returns Returns a string in prop case
 *
 * @example
 * ```
 *
 * ```
 */
function propCase(key: string): string {
  return toCamel(key).trim()
}

/**
 *  * Get Colors value.
 *
 * @params color - css color or key of ColorInterface
 * @returns Returns a function that takes a value as an argument and returns the colors value
 *
 * @example
 * ```
 *
 * ```
 */
export function getColor(color: ColorInterface): (value: string) => {
  readonly color: string
} {
  return (value: string): { readonly color: string } => ({
    color: (color[value as keyof ColorInterface] as string) || value,
  })
}

export function getDisplay(display: DisplayTypes): {
  readonly display: string
} {
  return { display }
}

/*
 * Background
 */
export function getBackground(color: ColorInterface) {
  return (background: string): { readonly background: string } => ({
    background:
      (color[background as keyof ColorInterface] as string) || background,
  })
}

export function getBackgroundAttachment(
  backgroundAttachment: BackgroundAttachmentTypes
): {
  readonly backgroundAttachment: BackgroundAttachmentTypes
} {
  return { backgroundAttachment }
}

export function getBackgroundClip(backgroundClip: BackgroundClipTypes): {
  readonly backgroundClip: string
} {
  return {
    backgroundClip,
  }
}
export function getBackgroundColor(color: ColorInterface) {
  return (
    backgroundColor: ColorTypes
  ): { readonly background: ColorTypes } => ({
    background:
      (color[backgroundColor as keyof ColorInterface] as string) ||
      backgroundColor,
  })
}
export function getBackgroundPosition(
  backgroundPosition: BackgroundPositionTypes
): {
  readonly backgroundPosition: BackgroundPositionTypes
} {
  return { backgroundPosition }
}

export function getBackgroundRepeat(backgroundRepeat: BackgroundRepeatTypes): {
  readonly backgroundRepeat: BackgroundRepeatTypes
} {
  return { backgroundRepeat }
}

export function getBackgroundSize(backgroundSize: BackgroundSizeTypes): {
  readonly backgroundSize: BackgroundSizeTypes
} {
  return {
    backgroundSize,
  }
}

export function getBackgroundImage(backgroundImage: string): {
  readonly backgroundImage: string
} {
  return {
    backgroundImage,
  }
}

/*
 * Border
 */

export function getRadiuses(
  radius: RadiusInterface = {
    circle: RADIUS_CIRCLE,
    none: RADIUS_NONE,
    round: RADIUS_ROUND,
    rounded: RADIUS_ROUNDED,
  }
) {
  return (value: keyof RadiusInterface | string): string => {
    switch (value) {
      case 'circle':
        return maybeString(radius.circle) ?? RADIUS_CIRCLE
      case 'none':
        return maybeString(radius.none) ?? RADIUS_NONE
      case 'round':
        return maybeString(radius.round) ?? RADIUS_ROUND
      case 'rounded':
        return maybeString(radius.rounded) ?? RADIUS_ROUNDED

      default:
        return value || '0'
    }
  }
}

export function getBorder(border: BorderInterface) {
  return (value: string): { readonly border: string } => ({
    border: border[value as keyof BorderInterface] || value,
  })
}

export function getBorderBottom(border: BorderInterface) {
  return (borderBottom: string): { readonly borderBottom: string } => ({
    borderBottom: border[borderBottom as keyof BorderInterface] || borderBottom,
  })
}

export function getBorderLeft(border: BorderInterface) {
  return (borderLeft: string): { readonly borderLeft: string } => ({
    borderLeft: border[borderLeft as keyof BorderInterface] || borderLeft,
  })
}

export function getBorderRight(border: BorderInterface) {
  return (borderRight: string): { readonly borderRight: string } => ({
    borderRight: border[borderRight as keyof BorderInterface] || borderRight,
  })
}

export function getBorderTop(border: BorderInterface) {
  return (borderTop: string): { readonly borderTop: string } => ({
    borderTop: border[borderTop as keyof BorderInterface] || borderTop,
  })
}

export function getBorderY(border: BorderInterface) {
  return (
    value: string
  ): {
    readonly borderTop: string
    readonly borderBottom: string
  } => ({
    borderTop: border[value as keyof BorderInterface] || value,
    borderBottom: border[value as keyof BorderInterface] || value,
  })
}

export function getBorderX(border: BorderInterface) {
  return (
    value: string
  ): {
    readonly borderRight: string
    readonly borderLeft: string
  } => ({
    borderRight: border[value as keyof BorderInterface] || value,
    borderLeft: border[value as keyof BorderInterface] || value,
  })
}

export function getBorderWidth(borderWidth: string): {
  readonly borderWidth: string
} {
  return {
    borderWidth,
  }
}

export function getBorderColor(borderColor: BorderStyleTypes): {
  readonly borderColor: BorderStyleTypes
} {
  return {
    borderColor,
  }
}

export function getBorderStyle(borderStyle: BorderStyleTypes): {
  readonly borderStyle: BorderStyleTypes
} {
  return {
    borderStyle,
  }
}

export function getRadius(radius: RadiusInterface) {
  return (
    value: keyof RadiusInterface
  ): {
    readonly borderRadius: string
  } => ({
    borderRadius: `${getRadiuses(radius)(value)}`,
  })
}

export function getBorderBottomRadius(radius: RadiusInterface) {
  return (
    borderBottomRadius: keyof RadiusInterface
  ): {
    readonly borderBottomRadius: string
  } => ({
    borderBottomRadius: `${getRadiuses(radius)(borderBottomRadius)}`,
  })
}

export function getBorderLeftRadius(radius: RadiusInterface) {
  return (
    borderLeftRadius: keyof RadiusInterface
  ): {
    readonly borderLeftRadius: string
  } => ({
    borderLeftRadius: `${getRadiuses(radius)(borderLeftRadius)}`,
  })
}

export function getBorderRightRadius(radius: RadiusInterface) {
  return (
    borderRightRadius: keyof RadiusInterface
  ): {
    readonly borderRightRadius: string
  } => ({
    borderRightRadius: `${getRadiuses(radius)(borderRightRadius)}`,
  })
}

export function getBorderTopRadius(radius: RadiusInterface) {
  return (
    borderTopRadius: keyof RadiusInterface
  ): {
    readonly borderTopRadius: string
  } => ({
    borderTopRadius: `${getRadiuses(radius)(borderTopRadius)}`,
  })
}

export function getBorderYRadius(radius: RadiusInterface) {
  return (
    value: keyof RadiusInterface
  ): {
    readonly borderTopRadius: string
    readonly borderBottomRadius: string
  } => ({
    borderTopRadius: `${getRadiuses(radius)(value)}`,
    borderBottomRadius: `${getRadiuses(radius)(value)}`,
  })
}

export function getBorderXRadius(radius: RadiusInterface) {
  return (
    value: keyof RadiusInterface
  ): {
    readonly borderRightRadius: string
    readonly borderLeftRadius: string
  } => ({
    borderRightRadius: getRadiuses(radius)(value),
    borderLeftRadius: getRadiuses(radius)(value),
  })
}

/*
 * Elevate
 */

export function getElevate(elevate: ElevateInterface) {
  return (
    value: string | keyof ElevateInterface
  ): {
    readonly boxShadow: string
  } => {
    const elevateValue = typeof value === 'number' ? value : parseInt(value, 10)

    return {
      boxShadow: elevate[elevateValue as keyof ElevateInterface],
    }
  }
}
export function getBoxSizing(boxSizing: BoxSizingTypes): {
  readonly boxSizing: BoxSizingTypes
} {
  return { boxSizing }
}

/*
 * Centered
 */
export function getCentered(): {
  readonly margin: string
} {
  return { margin: '0 auto' }
}

/*
 * Flex
 */
export function getFlex(value: string): {
  readonly flex: string
} {
  return { flex: value }
}

export function getFlexGrow(value: number): {
  readonly flex: string
} {
  return { flex: `${value}` }
}

export function getFlexShrink(value: number): {
  readonly flexShrink: string
} {
  return { flexShrink: `${value}` }
}

export function getFlexDirection(value: FlexDirectionTypes): {
  readonly flexDirection: FlexDirectionTypes
} {
  return {
    flexDirection: value,
  }
}

export function getFlexWrap(value: FlexWrapTypes): {
  readonly flexWrap: FlexWrapTypes
} {
  return {
    flexWrap: value,
  }
}

export function getFlexBasis(value: string | number): {
  readonly flexBasis: string
} {
  return {
    flexBasis: `${value}`,
  }
}

export function getOrder(value: number): {
  readonly order: string
} {
  return { order: `${value}` }
}

export function getJustifyContent(value: FlexContentTypes): {
  readonly justifyContent: FlexContentTypes
} {
  return {
    justifyContent: value,
  }
}

export function getJustifyItems(value: FlexContentTypes): {
  readonly justifyItems: FlexContentTypes
} {
  return {
    justifyItems: value,
  }
}

export function getJustifySelf(value: FlexSelfTypes): {
  readonly justifySelf: FlexSelfTypes
} {
  return {
    justifySelf: value,
  }
}

export function getAlignContent(value: FlexContentTypes): {
  readonly alignContent: FlexContentTypes
} {
  return {
    alignContent: value,
  }
}

export function getAlignItems(value: FlexItemsTypes): {
  readonly alignItems: FlexItemsTypes
} {
  return {
    alignItems: value,
  }
}

export function getAlignSelf(value: FlexSelfTypes): {
  readonly alignSelf: FlexSelfTypes
} {
  return {
    alignSelf: value,
  }
}

/*
 * Width / Height
 */
export function getHeight(unit: UnitInterface) {
  return (
    height: string | keyof UnitInterface
  ): {
    readonly height: string
  } => ({
    height: unit[height as keyof UnitInterface] || (height as string),
  })
}

export function getWidth(unit: UnitInterface) {
  return (
    width: string | keyof UnitInterface
  ): {
    readonly width: string
  } => ({
    width: unit[width as keyof UnitInterface] || (width as string),
  })
}

export function getMaxHeight(unit: UnitInterface) {
  return (
    maxHeight: string | keyof UnitInterface
  ): {
    readonly maxHeight: string
  } => ({
    maxHeight: unit[maxHeight as keyof UnitInterface] || (maxHeight as string),
  })
}

export function getMaxWidth(unit: UnitInterface) {
  return (
    maxWidth: string | keyof UnitInterface
  ): {
    readonly maxWidth: string
  } => ({
    maxWidth: unit[maxWidth as keyof UnitInterface] || (maxWidth as string),
  })
}

export function getWidthHeight(unit: UnitInterface) {
  return (
    value: string
  ): {
    readonly height: string
    readonly width: string
  } => {
    return {
      height: unit[value as keyof UnitInterface] || (value as string),
      width: unit[value as keyof UnitInterface] || (value as string),
    }
  }
}

/*
 * Text
 */
export function getTextAlign(textAlign: TextAlignTypes): {
  readonly textAlign: TextAlignTypes
} {
  return { textAlign }
}
export function getTruncate(): {
  readonly overflow: 'hidden'
  readonly whiteSpace: 'nowrap'
  readonly textOverflow: 'ellipsis'
} {
  return {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  }
}

export function getWordBreak(wordBreak: WordBreakTypes): {
  readonly wordBreak: WordBreakTypes
} {
  return { wordBreak }
}

export function getListStyle(listStyle: ListStyleTypes): {
  readonly listStyle: ListStyleTypes
} {
  return { listStyle }
}

export function getListPosition(listPosition: ListPositionTypes): {
  readonly listPosition: ListPositionTypes
} {
  return {
    listPosition,
  }
}

export function getTextDecoration(textDecoration: TextDecorationTypes): {
  readonly textDecoration: TextDecorationTypes
} {
  return {
    textDecoration,
  }
}

export function getTextTransform(textTransform: TextTransformTypes): {
  readonly textTransform: TextTransformTypes
} {
  return {
    textTransform,
  }
}

export function getVerticalAlign(verticalAlign: VerticalAlignTypes): {
  readonly verticalAlign: VerticalAlignTypes
} {
  return {
    verticalAlign,
  }
}

export function getWhiteSpace(whiteSpace: WhiteSpaceTypes): {
  readonly whiteSpace: WhiteSpaceTypes
} {
  return { whiteSpace }
}

/*
 * Media
 */

export function getMediaQuires(
  breakpoints: BreakpointsInterface,
  unit: UnitInterface
) {
  return (hostBreakpoints: { readonly [key: string]: any }): DynamicStyle => {
    const { sm, md, lg, xl } = breakpoints
    /* eslint-disable functional/no-let */
    /* eslint-disable functional/no-expression-statement */
    /* eslint-disable functional/no-loop-statement */
    /* eslint-disable functional/no-conditional-statement */
    /* eslint-disable functional/immutable-data */

    // eslint-disable-next-line functional/prefer-readonly-type
    const result: { [key: string]: string[] } = {}

    for (const breakpoint in hostBreakpoints) {
      let index = 0

      switch (breakpoint) {
        case 'sm':
          index = 0
          break
        case 'md':
          index = 2
          break
        case 'lg':
          index = 4
          break
        case 'xl':
          index = 6
          break
      }

      for (const key in hostBreakpoints[breakpoint].min) {
        const prop = getAlias(key) || key
        const value = hostBreakpoints[breakpoint].min[key]

        if (result[prop]) {
          result[prop][index] = unit[value as keyof UnitInterface] || value
        } else {
          result[prop] = []
          result[prop][index] = unit[value as keyof UnitInterface] || value
        }
      }

      for (const key in hostBreakpoints[breakpoint].max) {
        const prop = getAlias(key) || key
        const value = hostBreakpoints[breakpoint].max[key]

        if (result[prop]) {
          result[prop][index + 1] = unit[value as keyof UnitInterface] || value
        } else {
          result[prop] = []

          result[prop][index + 1] = unit[value as keyof UnitInterface] || value
        }
      }
    }

    return facepaint(
      [
        `@media(min-width: ${sm.min}px)`, // 0
        `@media(max-width: ${sm.max}px)`, // 1
        `@media(min-width: ${md.min}px)`, // 2
        `@media(max-width: ${md.max}px)`, // 3
        `@media(min-width: ${lg.min}px)`, // 4
        `@media(max-width: ${lg.max}px)`, // 5
        `@media(min-width: ${xl.min}px)`, // 6
        `@media(max-width: ${xl.max}px)`, // 7
      ],
      {
        literal: true,
      }
    )(result)[0]
  }
}

/*
 * Position
 */
export function getPosition(position: PositionTypes): {
  readonly position: PositionTypes
} {
  return {
    position,
  }
}

export function getTop(top: string): {
  readonly top: string
} {
  return {
    top,
  }
}

export function getBottom(bottom: string): {
  readonly bottom: string
} {
  return {
    bottom,
  }
}

export function getLeft(left: string): {
  readonly left: string
} {
  return {
    left,
  }
}

export function getRight(right: string): {
  readonly right: string
} {
  return {
    right,
  }
}

/*
 * Floats
 */
export function getFloat(float: FloatTypes): {
  readonly float: FloatTypes
} {
  return {
    float,
  }
}

export function getClear(): {
  readonly '&::after': {
    readonly content: '""'
    readonly display: 'table'
    readonly clear: 'both'
  }
} {
  return {
    '&::after': {
      content: '""',
      display: 'table',
      clear: 'both',
    },
  }
}

/*
 * Overflow
 */
export function getOverflow(overflow: string): {
  readonly overflow: string
} {
  return { overflow }
}

export function getOverflowX(overflowX: OverflowTypes): {
  readonly overflowX: OverflowTypes
} {
  return { overflowX }
}

export function getOverflowY(overflowY: OverflowTypes): {
  readonly overflowY: OverflowTypes
} {
  return { overflowY }
}

export function getOverflowScrolling(
  overflowScrolling: OverflowScrollingTypes
): { readonly '-webkit-Overflow-scrolling': OverflowScrollingTypes } {
  return { '-webkit-Overflow-scrolling': overflowScrolling }
}

export function getOverflowWrap(overflowWrap: OverflowWrapTypes): {
  readonly overflowWrap: OverflowWrapTypes
} {
  return {
    overflowWrap,
  }
}
/*
 * Font
 */
export function getFontSize(font: FontInterface) {
  return (
    fontSize: number | string
  ): {
    readonly fontSize: string
  } => {
    return {
      fontSize: (font.size as any)[fontSize as keyof FontSizeType] || fontSize,
    }
  }
}

export function getLineHeight(font: FontInterface) {
  return (
    lineHeight: number | string
  ): {
    readonly lineHeight: string | number
  } => {
    return {
      lineHeight:
        font.lineHeight[lineHeight as keyof FontLineHeightInterface] ||
        lineHeight,
    }
  }
}

export function getLetterSpacing(letterSpacing: string): {
  readonly letterSpacing: string
} {
  return {
    letterSpacing,
  }
}

export function getFontWeight(font: FontInterface) {
  return (
    fontWeight: number | string
  ): {
    readonly fontWeight: string
  } => {
    return {
      fontWeight:
        `${font.weight[fontWeight as keyof FontWeightType]}` || `${fontWeight}`,
    }
  }
}

export function getFontFamily(font: FontInterface) {
  return (
    fontFamily: FontFamilyTypes
  ): {
    readonly fontFamily: FontFamilyTypes
  } => {
    return {
      fontFamily: (font as any).family[fontFamily] || fontFamily,
    }
  }
}

/*
 * Z Index
 */
export function getZIndex(zIndex: number | string | 'auto'): {
  readonly zIndex: number | string | 'auto'
} {
  return { zIndex: `${zIndex}` }
}

/*
 * Object
 */
export function getObjectFit(objectFit: ObjectFitTypes): {
  readonly objectFit: ObjectFitTypes
} {
  return {
    objectFit: `${objectFit}`,
  }
}

export function getObjectPosition(objectPosition: ObjectPositionTypes): {
  readonly objectPosition: ObjectPositionTypes
} {
  return {
    objectPosition: `${objectPosition}`,
  }
}

/*
 * Visibility
 */
export function getVisibility(visibility: VisibilityTypes): {
  readonly visibility: VisibilityTypes
} {
  return {
    visibility,
  }
}

/*
 * Interactivity
 */
export function getCursor(cursor: CursorTypes): {
  readonly cursor: CursorTypes
} {
  return {
    cursor,
  }
}

export function getAppearance(appearance: AppearanceCssTypes): {
  readonly appearance: AppearanceCssTypes
} {
  return {
    appearance,
  }
}

export function getPointerEvents(pointerEvents: PointerEventsTypes): {
  readonly pointerEvents: PointerEventsTypes
} {
  return {
    pointerEvents,
  }
}

export function getResize(resize: ResizeTypes): {
  readonly resize: ResizeTypes
} {
  return {
    resize,
  }
}

export function getUserSelect(userSelect: UserSelectTypes): {
  readonly userSelect: UserSelectTypes
} {
  return {
    userSelect,
  }
}

/*
 * Transition
 */
export function getTransition(transition: TransitionTypes): {
  readonly transition: TransitionTypes
} {
  return {
    transition,
  }
}

export function getEaseTransition(
  options?: Partial<TransitionEaseInterface>
): string {
  const {
    delay = '',
    property = 'all',
    speed = MEDIUM,
    ease = 'ease',
  } = options || {}
  return `${property} ${speed} ${ease} ${delay}`
}

/*
 * Transforms
 */
export function getTransform(transform: string): {
  readonly transform: string
} {
  return {
    transform,
  }
}

/*
 * Filters
 */
export function getFilter(filter: string): { readonly filter: string } {
  return { filter }
}

export function getFilterBlur(filterBlur: string): {
  readonly filterBlur: string
} {
  return { filterBlur }
}

export function getFilterBrightness(filterBrightness: string): {
  readonly filterBrightness: string
} {
  return {
    filterBrightness,
  }
}

export function getFilterContrast(filterContrast: string): {
  readonly filterContrast: string
} {
  return {
    filterContrast,
  }
}

export function getFilterDropShadow(filterDropShadow: string): {
  readonly filterDropShadow: string
} {
  return {
    filterDropShadow,
  }
}

export function getFilterGrayscale(filterGrayscale: string): {
  readonly filterGrayscale: string
} {
  return {
    filterGrayscale,
  }
}

export function getFilterHueRotate(filterHueRotate: string): {
  readonly filterHueRotate: string
} {
  return {
    filterHueRotate,
  }
}

export function getFilterOpacity(filterOpacity: string): {
  readonly filterOpacity: string
} {
  return { filterOpacity }
}

export function getFilterSaturate(filterSaturate: string): {
  readonly filterSaturate: string
} {
  return {
    filterSaturate,
  }
}
export function getFilterSepia(filterSepia: string): {
  readonly filterSepia: string
} {
  return { filterSepia }
}

/*
Opacity
*/

export function getOpacity(opacity: string | number): () => {
  readonly opacity: string
} {
  return () => ({
    opacity: `${opacity}`,
  })
}

/*
 * Table
 */
export function getBorderCollapse(value: 'collapse' | 'separate'): {
  readonly borderCollapse: 'collapse' | 'separate'
} {
  return {
    borderCollapse: value,
  }
}
/*
 Spacing
*/
export function isValidStringValue(value: string | number): boolean {
  return typeof value === 'string' && value.trim() !== ''
}

export function isValidNumberValue(value: string | number): boolean {
  return typeof value === 'number'
}

export function isValidUnitValue(value: string | number): boolean {
  return (
    isValidStringValue(value) &&
    Boolean((value as string).match(/%|px|rem|em|auto/))
  )
}

export function allPositions(
  unit: UnitInterface
): (value: string | number, prop: string) => Record<string, any> {
  return (value: string | number, prop: string) => {
    const propsList = prop.split(';')

    switch (true) {
      case value === 'default':
        return propsList.reduce((acc: any, key: string) => {
          return {
            ...acc,
            [propCase(key)]: unit.default,
          }
        }, {})

      case isValidNumberValue(value):
        return propsList.reduce((acc: any, key: string) => {
          return {
            ...acc,
            [propCase(key)]: unit[value as keyof UnitInterface],
          }
        }, {})

      case isValidUnitValue(value) && isValidStringValue(value): {
        return propsList.reduce((acc: any, key: string) => {
          return { ...acc, [propCase(key)]: value }
        }, {})
      }

      default: {
        return ''
      }
    }
  }
}

export function unitPositions({
  unit,
  style,
}: UnitPositionsInterface): Record<string, any> {
  const unitsReducer = (
    accumulator: { readonly [key: string]: any },
    key: string
  ): any => {
    if (key === 'default') return accumulator

    const prop = `${style}${toUpperFirst(key)}`

    return {
      ...accumulator,
      [prop]: (value: string) => {
        if (!isValidStringValue(value)) return {}
        const positions = value.split(' ')

        return Object.keys(positions).reduce((accum, pos: string) => {
          const index = parseInt(pos, 10)
          return {
            ...accum,
            [toCamel(`${style}-${positions[index]}`)]:
              unit[key as keyof UnitInterface],
          }
        }, {})
      },
    }
  }

  const getAllPositions = allPositions(unit)

  const initialStyles = {
    [style]: (value: string) => getAllPositions(value, style),
    [`${style}Bottom`]: (value: string) =>
      getAllPositions(value, `${style}Bottom`),
    [`${style}Left`]: (value: string) => getAllPositions(value, `${style}Left`),
    [`${style}Right`]: (value: string) =>
      getAllPositions(value, `${style}Right`),
    [`${style}Top`]: (value: string) => getAllPositions(value, `${style}Top`),
    [`${style}X`]: (value: string) =>
      getAllPositions(value, `${style}Right; ${style}Left`),
    [`${style}Y`]: (value: string) =>
      getAllPositions(value, `${style}Bottom; ${style}Top`),
  }

  return Object.keys(unit).reduce(unitsReducer, initialStyles)
}
