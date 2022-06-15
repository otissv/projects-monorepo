import {
  EASE,
  EASE_IN,
  EASE_IN_OUT,
  EASE_OUT,
  EasePropsInterface,
  PartialUtilityInterface,
  UtilityInterface,
} from './utility.types'

import { maybe } from 'c-ufunc/maybe'

import { PartialThemeInterface } from '../theme/theme.types'

import {
  unitPositions,
  getColor,
  getBackground,
  getBorder,
  getBorderBottom,
  getBorderLeft,
  getBorderRight,
  getBorderTop,
  getBorderY,
  getBorderX,
  getRadius,
  getBorderBottomRadius,
  getBorderLeftRadius,
  getBorderRightRadius,
  getBorderTopRadius,
  getBorderYRadius,
  getBorderXRadius,
  getDisplay,
  getBackgroundAttachment,
  getBackgroundClip,
  getBackgroundColor,
  getBackgroundPosition,
  getBackgroundRepeat,
  getBackgroundSize,
  getBackgroundImage,
  getCentered,
  getFlex,
  getFlexGrow,
  getOrder,
  getFlexShrink,
  getFlexDirection,
  getFlexWrap,
  getFlexBasis,
  getJustifyContent,
  getJustifyItems,
  getJustifySelf,
  getAlignContent,
  getAlignSelf,
  getAlignItems,
  getElevate,
  getHeight,
  getWidth,
  getMaxHeight,
  getMaxWidth,
  getWidthHeight,
  getTextAlign,
  getTruncate,
  getWordBreak,
  getListStyle,
  getListPosition,
  getTextDecoration,
  getTextTransform,
  getVerticalAlign,
  getWhiteSpace,
  getMediaQuires,
  getPosition,
  getBottom,
  getLeft,
  getRight,
  getFloat,
  getOverflow,
  getFontSize,
  getLineHeight,
  getLetterSpacing,
  getFontWeight,
  getClear,
  getOverflowX,
  getOverflowY,
  getOverflowScrolling,
  getOverflowWrap,
  getFontFamily,
  getBorderWidth,
  getBorderStyle,
  getBorderColor,
  getZIndex,
  getObjectFit,
  getObjectPosition,
  getVisibility,
  getCursor,
  getAppearance,
  getPointerEvents,
  getResize,
  getUserSelect,
  getTransition,
  getTransform,
  getBoxSizing,
  getFilter,
  getFilterBlur,
  getFilterBrightness,
  getFilterContrast,
  getFilterDropShadow,
  getFilterGrayscale,
  getFilterHueRotate,
  getFilterOpacity,
  getFilterSaturate,
  getFilterSepia,
  getOpacity,
  getBorderCollapse,
  getEaseTransition,
} from './utility.helpers'

export function utilityTheme<
  P extends PartialThemeInterface,
  T extends PartialUtilityInterface
>(theme: P): T {
  const maybeTheme = maybe({})

  const hostColor: any = maybeTheme(theme.color)
  const hostBorder: any = maybeTheme(theme.border)
  const hostElevate: any = maybeTheme(theme.elevate)
  const hostFont: any = maybeTheme(theme.font)
  const hostRadius: any = maybeTheme(theme.radius)
  const hostUnit: any = maybeTheme(theme.unit)
  const hostUtility: any = maybeTheme(theme.utility)
  const hostBreakpoints: any = maybeTheme(theme.breakpoints)
  const hostTransition: any = maybeTheme(theme.transition)

  const defaults: UtilityInterface = {
    ...hostUtility,

    /*
     * Margin
     */
    ...unitPositions({ unit: hostUnit, style: 'margin' }),
    ...unitPositions({ unit: hostUnit, style: 'm' }),

    /*
     * Padding
     */
    ...unitPositions({ unit: hostUnit, style: 'padding' }),
    ...unitPositions({ unit: hostUnit, style: 'p' }),

    /*
     * Color
     */
    color: getColor(hostColor),
    cl: getColor(hostColor),

    /*
     * Display
     */
    display: getDisplay,
    d: getDisplay,

    /*
     * Background
     */
    background: getBackground(hostColor),
    bg: getBackground(hostColor),
    backgroundAttachment: getBackgroundAttachment,
    bga: getBackgroundAttachment,
    backgroundClip: getBackgroundClip,
    bgl: getBackgroundClip,
    backgroundColor: getBackgroundColor,
    bgc: getBackgroundColor(hostColor),
    backgroundPosition: getBackgroundPosition,
    bgp: getBackgroundPosition,
    backgroundRepeat: getBackgroundRepeat,
    bgr: getBackgroundRepeat,
    backgroundSize: getBackgroundSize,
    bgs: getBackgroundSize,
    backgroundImage: getBackgroundImage,
    bgi: getBackgroundImage,
    /*
     * Border
     */
    border: getBorder(hostBorder),
    borderBottom: getBorderBottom(hostBorder),
    borderLeft: getBorderLeft(hostBorder),
    borderRight: getBorderRight(hostBorder),
    borderTop: getBorderTop(hostBorder),
    borderY: getBorderY(hostBorder),
    borderX: getBorderX(hostBorder),
    borderColor: getBorderColor(hostColor),
    borderWidth: getBorderWidth,
    borderStyle: getBorderStyle,
    bd: getBorder(hostBorder),
    bdb: getBorderBottom(hostBorder),
    bdl: getBorderLeft(hostBorder),
    bdr: getBorderRight(hostBorder),
    bdt: getBorderTop(hostBorder),
    bdx: getBorderX(hostBorder),
    bdy: getBorderY(hostBorder),
    bdc: getBorderColor(hostColor),
    bdw: getBorderWidth,
    bds: getBorderStyle,

    radius: getRadius(hostRadius),
    borderBottomRadius: getBorderBottomRadius(hostRadius),
    borderLeftRadius: getBorderLeftRadius(hostRadius),
    borderRightRadius: getBorderRightRadius(hostRadius),
    borderTopRadius: getBorderTopRadius(hostRadius),
    borderYRadius: getBorderYRadius(hostRadius),
    borderXRadius: getBorderXRadius(hostRadius),
    r: getRadius(hostRadius),
    rb: getBorderBottomRadius(hostRadius),
    rl: getBorderLeftRadius(hostRadius),
    rr: getBorderRightRadius(hostRadius),
    rt: getBorderTopRadius(hostRadius),
    rx: getBorderXRadius(hostRadius),
    ry: getBorderYRadius(hostRadius),

    /*
     * Elevate
     */
    elevate: getElevate(hostElevate),
    e: getElevate(hostElevate),

    /*
     * Box Sizing
     */
    boxSizing: getBoxSizing,
    bs: getBoxSizing,

    /*
     * Centered
     */
    centered: getCentered,
    ct: getCentered,

    /*
     * Flex
     */
    flex: getFlex,
    fl: getFlex,
    flexGrow: getFlexGrow,
    flg: getFlexGrow,
    flexShrink: getFlexShrink,
    fls: getFlexShrink,
    flexDirection: getFlexDirection,
    fld: getFlexDirection,
    flexWrap: getFlexWrap,
    flw: getFlexWrap,
    flexBasis: getFlexBasis,
    flb: getFlexBasis,

    order: getOrder,
    od: getOrder,

    justifyContent: getJustifyContent,
    jc: getJustifyContent,
    justifyItems: getJustifyItems,
    ji: getJustifyItems,
    justifySelf: getJustifySelf,
    js: getJustifySelf,

    alignContent: getAlignContent,
    ac: getAlignContent,
    alignItems: getAlignItems,
    ai: getAlignItems,
    alignSelf: getAlignSelf,
    af: getAlignSelf,

    /*
     * Width / Height
     */
    h: getHeight(hostUnit),
    w: getWidth(hostUnit),
    maxHeight: getMaxHeight(hostUnit),
    mh: getMaxHeight(hostUnit),
    maxWidth: getMaxWidth(hostUnit),
    mw: getMaxWidth(hostUnit),
    widthHeight: getWidthHeight(hostUnit),
    wh: getWidthHeight(hostUnit),

    /*
     * Text
     */
    textAlign: getTextAlign,
    ta: getTextAlign,
    truncate: getTruncate,
    tc: getTruncate,
    wordBreak: getWordBreak,
    wb: getWordBreak,
    listStyle: getListStyle,
    lt: getListStyle,
    listPosition: getListPosition,
    lp: getListPosition,
    textDecoration: getTextDecoration,
    td: getTextDecoration,
    tt: getTextTransform,
    verticalAlign: getVerticalAlign,
    va: getVerticalAlign,
    whiteSpace: getWhiteSpace,
    ws: getWhiteSpace,

    /*
     * Media
     */
    mediaQuires: getMediaQuires(hostBreakpoints, hostUnit),
    mq: getMediaQuires(hostBreakpoints, hostUnit),
    // sm: (value: { [key: string]: number | string }) =>
    //   getMediaQuires(hostBreakpoints, hostUnit)(value),
    // md: (value: { [key: string]: number | string }) =>
    //   getMediaQuires(hostBreakpoints, hostUnit)(value),
    // lg: (value: { [key: string]: number | string }) =>
    //   getMediaQuires(hostBreakpoints, hostUnit)(value),
    // xl: (value: { [key: string]: number | string }) =>
    //   getMediaQuires(hostBreakpoints, hostUnit)(value),

    /*
     * Position
     */
    position: getPosition,
    ps: getPosition,
    top: getBorderTop,
    bottom: getBottom,
    left: getLeft,
    right: getRight,

    /*
     * Overflow
     */
    overflow: getOverflow,
    of: getOverflow,
    overflowX: getOverflowX,
    ox: getOverflowX,
    overflowY: getOverflowY,
    oy: getOverflowY,
    overflowScrolling: getOverflowScrolling,
    os: getOverflowScrolling,
    overflowWrap: getOverflowWrap,
    ow: getOverflowWrap,

    /*
     * Float
     */
    float: getFloat,
    ft: getFloat,
    clear: getClear,
    cf: getClear,

    /*
     * Font
     */
    fontFamily: getFontFamily(hostFont),
    ff: getFontFamily(hostFont),
    fontSize: getFontSize(hostFont),
    fs: getFontSize(hostFont),
    lineHeight: getLineHeight(hostFont),
    lh: getLineHeight(hostFont),
    letterSpacing: getLetterSpacing,
    ls: getLetterSpacing(hostFont),
    fontWeight: getFontWeight(hostFont),
    fw: getFontWeight(hostFont),

    /*
     * Z Index
     */
    zIndex: getZIndex,
    zi: getZIndex,

    /*
     * Object
     */
    objectFit: getObjectFit,
    ot: getObjectFit,
    objectPosition: getObjectPosition,
    op: getObjectPosition,

    /*
     * Visibility
     */
    visibility: getVisibility,
    vs: getVisibility,

    /*
     * Interactivity
     */
    cursor: getCursor,
    cr: getCursor,
    appearance: getAppearance,
    ap: getAppearance,
    pointerEvents: getPointerEvents,
    pe: getPointerEvents,
    resize: getResize,
    rs: getResize,
    userSelect: getUserSelect,
    us: getUserSelect,

    /*
     * Transition
     */
    transition: getTransition,
    tr: getTransition,

    /*
     * Transforms
     */
    transform: getTransform,
    tf: getTransform,

    /*
     * Filters
     */
    filter: getFilter,
    filterBlur: getFilterBlur,
    filterBrightness: getFilterBrightness,
    filterContrast: getFilterContrast,
    filterDropShadow: getFilterDropShadow,
    filterGrayscale: getFilterGrayscale,
    filterHueRotate: getFilterHueRotate,
    filterOpacity: getFilterOpacity,
    filterSaturate: getFilterSaturate,
    filterSepia: getFilterSepia,
    fr: getFilter,
    frr: getFilterBlur,
    frb: getFilterBrightness,
    frc: getFilterContrast,
    frd: getFilterDropShadow,
    frg: getFilterGrayscale,
    frh: getFilterHueRotate,
    fro: getFilterOpacity,
    frs: getFilterSaturate,
    frp: getFilterSepia,

    opacity0: getOpacity(0),
    opacity25: getOpacity(0.25),
    opacity50: getOpacity(0.5),
    opacity75: getOpacity(0.75),
    opacity100: getOpacity(1),
    op0: getOpacity(0),
    op25: getOpacity(0.25),
    op50: getOpacity(0.5),
    op75: getOpacity(0.75),
    op100: getOpacity(1),

    borderCollapse: getBorderCollapse,
    tbc: getBorderCollapse,

    // ease
    easeFast: (props?: EasePropsInterface) => {
      return getEaseTransition({
        ...props,
        ease: EASE,
        speed: hostTransition.fast,
      })
    },
    easeMedium: (props?: EasePropsInterface) => {
      return getEaseTransition({
        ...props,
        ease: EASE,
        speed: hostTransition.medium,
      })
    },
    easeSlow: (props?: EasePropsInterface) => {
      return getEaseTransition({
        ...props,
        ease: EASE,
        speed: hostTransition.slow,
      })
    },
    easeXslow: (props?: EasePropsInterface) => {
      return getEaseTransition({
        ...props,
        ease: EASE,
        speed: hostTransition.xslow,
      })
    },

    // easIn
    easeInFast: (props?: EasePropsInterface) => {
      return getEaseTransition({
        ...props,
        ease: EASE_IN,
        speed: hostTransition.fast,
      })
    },
    easeInMedium: (props?: EasePropsInterface) => {
      return getEaseTransition({
        ...props,
        ease: EASE_IN,
        speed: hostTransition.medium,
      })
    },
    easeInSlow: (props?: EasePropsInterface) => {
      return getEaseTransition({
        ...props,
        ease: EASE_IN,
        speed: hostTransition.slow,
      })
    },
    easeInXslow: (props?: EasePropsInterface) => {
      return getEaseTransition({
        ...props,
        ease: EASE_IN,
        speed: hostTransition.hostTransition.xslow,
      })
    },

    // easeInOut
    easeInOutFast: (props?: EasePropsInterface) => {
      return getEaseTransition({
        ...props,
        ease: EASE_IN_OUT,
        speed: hostTransition.hostTransition.fast,
      })
    },
    easeInOutMedium: (props?: EasePropsInterface) => {
      return getEaseTransition({
        ...props,
        ease: EASE_IN_OUT,
        speed: hostTransition.medium,
      })
    },
    easeInOutSlow: (props?: EasePropsInterface) => {
      return getEaseTransition({
        ...props,
        ease: EASE_IN_OUT,
        speed: hostTransition.slow,
      })
    },
    easeInOutXslow: (props?: EasePropsInterface) => {
      return getEaseTransition({
        ...props,
        ease: EASE_IN_OUT,
        speed: hostTransition.xslow,
      })
    },

    // easeOut
    easeOutFast: (props?: EasePropsInterface) => {
      return getEaseTransition({
        ...props,
        ease: EASE_OUT,
        speed: hostTransition.fast,
      })
    },
    easeOutMedium: (props?: EasePropsInterface) => {
      return getEaseTransition({
        ...props,
        ease: EASE_OUT,
        speed: hostTransition.medium,
      })
    },
    easeOutSlow: (props?: EasePropsInterface) => {
      return getEaseTransition({
        ...props,
        ease: EASE_OUT,
        speed: hostTransition.slow,
      })
    },
    easeOutXslow: (props?: EasePropsInterface) => {
      return getEaseTransition({
        ...props,
        ease: EASE_OUT,
        speed: hostTransition.xslow,
      })
    },
  }
  return defaults as T
}
