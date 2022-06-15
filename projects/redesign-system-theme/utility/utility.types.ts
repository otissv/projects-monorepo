import { DynamicStyleFunction } from 'facepaint'

import { UnitInterface } from '../unit/unit.types'
import { BorderInterface } from '../border/border.types'
import { ElevateInterface } from '../elevate/elevate.types'
import { RadiusInterface } from '../radius/radius.types'
import { ColorInterface } from '../color/color.types'
import { FontInterface, FontFamilyTypes } from '../font/font.types'
import { MediaQueriesInterface } from '../mediaQueries/mediaQueries.theme.types'
import {
  TransitionInterface,
  TransitionSpeedTypes,
} from '../transition/transition.types'

export const EASE = 'ease'
export const EASE_IN = 'ease-in'
export const EASE_OUT = 'ease-out'
export const EASE_IN_OUT = 'ease-in-out'

export interface AliasInterface {
  readonly [key: string]: string
}

export interface UtilityInterface {
  /*
   * Color
   */
  readonly color: (
    color: ColorInterface
  ) => (value: string) => { readonly color: ColorTypes }
  readonly cl: (
    color: ColorInterface
  ) => (value: string) => { readonly color: ColorTypes }

  /*
   * Display
   */
  readonly display: (
    display: DisplayTypes
  ) => { readonly display: DisplayTypes }
  readonly d: (display: DisplayTypes) => { readonly display: DisplayTypes }

  /*
   * Background
   */
  readonly background: (
    color: ColorInterface
  ) => (background: string) => { readonly background: string }
  readonly bg: (
    color: ColorInterface
  ) => (background: string) => { readonly background: string }
  readonly backgroundAttachment: (
    backgroundAttachment: BackgroundAttachmentTypes
  ) => { readonly backgroundAttachment: BackgroundAttachmentTypes }
  readonly bga: (
    backgroundAttachment: BackgroundAttachmentTypes
  ) => { readonly backgroundAttachment: BackgroundAttachmentTypes }
  readonly backgroundClip: (
    backgroundClip: BackgroundClipTypes
  ) => { readonly backgroundClip: BackgroundClipTypes }
  readonly bgl: (
    backgroundClip: BackgroundClipTypes
  ) => { readonly backgroundClip: BackgroundClipTypes }
  readonly backgroundColor: (
    color: ColorInterface
  ) => (backgroundColor: ColorTypes) => { readonly backgroundColor: ColorTypes }
  readonly bgc: (
    color: ColorInterface
  ) => (background: string) => { readonly background: ColorTypes }
  readonly backgroundPosition: (
    backgroundPosition: BackgroundPositionTypes
  ) => { readonly backgroundPosition: BackgroundPositionTypes }
  readonly bgp: (
    backgroundPosition: BackgroundPositionTypes
  ) => { readonly backgroundPosition: BackgroundPositionTypes }
  readonly backgroundRepeat: (
    backgroundRepeat: BackgroundRepeatTypes
  ) => { readonly backgroundRepeat: BackgroundRepeatTypes }
  readonly bgr: (
    backgroundRepeat: BackgroundRepeatTypes
  ) => { readonly backgroundRepeat: BackgroundRepeatTypes }
  readonly backgroundSize: (
    backgroundSize: BackgroundSizeTypes
  ) => { readonly backgroundSize: BackgroundSizeTypes }
  readonly bgs: (
    backgroundSize: BackgroundSizeTypes
  ) => { readonly backgroundSize: BackgroundSizeTypes }
  readonly backgroundImage: (
    backgroundImage: string
  ) => { readonly backgroundImage: string }
  readonly bgi: (
    backgroundImage: string
  ) => { readonly backgroundImage: string }

  /*
   * Border
   */
  readonly border: (
    border: BorderInterface
  ) => (border: string) => { readonly border: string }
  readonly borderBottom: (
    border: BorderInterface
  ) => (borderBottom: string) => { readonly borderBottom: string }
  readonly borderLeft: (
    border: BorderInterface
  ) => (borderLeft: string) => { readonly borderLeft: string }
  readonly borderRight: (
    border: BorderInterface
  ) => (borderRight: string) => { readonly borderRight: string }
  readonly borderTop: (
    border: BorderInterface
  ) => (borderTop: string) => { readonly borderTop: string }
  readonly borderX: (
    border: BorderInterface
  ) => (
    value: string
  ) => { readonly borderRight: string; readonly borderLeft: string }
  readonly borderY: (
    border: BorderInterface
  ) => (
    value: string
  ) => { readonly borderTop: string; readonly borderBottom: string }
  readonly borderWidth: (
    borderWidth: string
  ) => { readonly borderWidth: string }
  readonly borderColor: (
    color: ColorInterface
  ) => (borderColor: ColorTypes) => { readonly borderColor: ColorTypes }
  readonly borderStyle: (
    borderStyle: BorderStyleTypes
  ) => { readonly borderStyle: BorderStyleTypes }
  readonly bd: (
    border: BorderInterface
  ) => (border: string) => { readonly border: string }
  readonly bdb: (
    border: BorderInterface
  ) => (borderBottom: string) => { readonly borderBottom: string }
  readonly bdl: (
    border: BorderInterface
  ) => (borderLeft: string) => { readonly borderLeft: string }
  readonly bdr: (
    border: BorderInterface
  ) => (borderRight: string) => { readonly borderRight: string }
  readonly bdt: (
    border: BorderInterface
  ) => (borderTop: string) => { readonly borderTop: string }
  readonly bdx: (
    border: BorderInterface
  ) => (
    value: string
  ) => { readonly borderRight: string; readonly borderLeft: string }
  readonly bdy: (
    border: BorderInterface
  ) => (
    value: string
  ) => { readonly borderTop: string; readonly borderBottom: string }
  readonly bdw: (borderWidth: string) => { readonly borderWidth: string }
  readonly bdc: (
    color: ColorInterface
  ) => (borderColor: ColorTypes) => { readonly borderColor: ColorTypes }
  readonly bds: (
    bds: BorderStyleTypes
  ) => { readonly borderStyle: BorderStyleTypes }

  readonly radius: (
    radius: RadiusInterface
  ) => (borderRadius: string) => { readonly borderRadius: string }
  readonly borderBottomRadius: (
    radius: RadiusInterface
  ) => (borderBottomRadius: string) => { readonly borderBottomRadius: string }
  readonly borderLeftRadius: (
    radius: RadiusInterface
  ) => (borderLeftRadius: string) => { readonly borderLeftRadius: string }
  readonly borderRightRadius: (
    radius: RadiusInterface
  ) => (borderRightRadius: string) => { readonly borderRightRadius: string }
  readonly borderTopRadius: (
    radius: RadiusInterface
  ) => (borderTopRadius: string) => { readonly borderTopRadius: string }
  readonly borderXRadius: (
    radius: RadiusInterface
  ) => (
    value: string
  ) => { readonly borderRightRadius: string; readonly borderLeftRadius: string }
  readonly borderYRadius: (
    radius: RadiusInterface
  ) => (
    radius: string
  ) => { readonly borderTopRadius: string; readonly borderBottomRadius: string }
  readonly r: (
    radius: RadiusInterface
  ) => (borderRadius: string) => { readonly borderRadius: string }
  readonly rb: (
    radius: RadiusInterface
  ) => (borderBottomRadius: string) => { readonly borderBottomRadius: string }
  readonly rl: (
    radius: RadiusInterface
  ) => (borderLeftRadius: string) => { readonly borderLeftRadius: string }
  readonly rr: (
    radius: RadiusInterface
  ) => (borderRightRadius: string) => { readonly borderRightRadius: string }
  readonly rt: (
    radius: RadiusInterface
  ) => (borderTopRadius: string) => { readonly borderTopRadius: string }
  readonly rx: (
    radius: RadiusInterface
  ) => (
    value: string
  ) => { readonly borderRightRadius: string; readonly borderLeftRadius: string }
  readonly ry: (
    radius: RadiusInterface
  ) => (
    value: string
  ) => { readonly borderTopRadius: string; readonly borderBottomRadius: string }

  /*
   * Margin
   */
  readonly margin: (
    value: string | number
  ) => { readonly margin: string | number }
  readonly marginTop: (
    value: string | number
  ) => { readonly marginTop: string | number }
  readonly marginRight: (
    value: string | number
  ) => { readonly marginRight: string | number }
  readonly marginBottom: (
    value: string | number
  ) => { readonly marginBottom: string | number }
  readonly marginLeft: (
    value: string | number
  ) => { readonly marginLeft: string | number }
  readonly marginX: (
    value: string | number
  ) => {
    readonly marginRight: string | number
    readonly marginLeft: string | number
  }
  readonly marginY: (
    value: string | number
  ) => { readonly marginTop: string; readonly marginBottom: string | number }
  readonly margin0: (value: string) => { readonly margin: string }
  readonly margin1: (value: string) => { readonly margin: string }
  readonly margin2: (value: string) => { readonly margin: string }
  readonly margin3: (value: string) => { readonly margin: string }
  readonly margin4: (value: string) => { readonly margin: string }
  readonly margin5: (value: string) => { readonly margin: string }
  readonly margin6: (value: string) => { readonly margin: string }
  readonly margin7: (value: string) => { readonly margin: string }
  readonly margin8: (value: string) => { readonly margin: string }
  readonly margin9: (value: string) => { readonly margin: string }
  readonly margin10: (value: string) => { readonly margin: string }
  readonly m: (value: string | number) => { readonly margin: string | number }
  readonly mt: (
    value: string | number
  ) => { readonly marginTop: string | number }
  readonly mr: (
    value: string | number
  ) => { readonly marginRight: string | number }
  readonly mb: (
    value: string | number
  ) => { readonly marginBottom: string | number }
  readonly ml: (
    value: string | number
  ) => { readonly marginLeft: string | number }
  readonly mx: (
    value: string | number
  ) => {
    readonly marginRight: string | number
    readonly marginLeft: string | number
  }
  readonly my: (
    value: string | number
  ) => {
    readonly marginTop: string | number
    readonly marginBottom: string | number
  }
  readonly m0: (value: string) => { readonly margin: string }
  readonly m1: (value: string) => { readonly margin: string }
  readonly m2: (value: string) => { readonly margin: string }
  readonly m3: (value: string) => { readonly margin: string }
  readonly m4: (value: string) => { readonly margin: string }
  readonly m5: (value: string) => { readonly margin: string }
  readonly m6: (value: string) => { readonly margin: string }
  readonly m7: (value: string) => { readonly margin: string }
  readonly m8: (value: string) => { readonly margin: string }
  readonly m9: (value: string) => { readonly margin: string }
  readonly m10: (value: string) => { readonly margin: string }

  /*
   * Padding
   */
  readonly padding: (
    value: string | number
  ) => { readonly padding: string | number }
  readonly paddingTop: (
    value: string | number
  ) => { readonly paddingTop: string | number }
  readonly paddingRight: (
    value: string | number
  ) => { readonly paddingRight: string | number }
  readonly paddingBottom: (
    value: string | number
  ) => { readonly paddingBottom: string | number }
  readonly paddingLeft: (
    value: string | number
  ) => { readonly paddingLeft: string | number }
  readonly paddingX: (
    value: string | number
  ) => { readonly paddingRight: string; readonly paddingLeft: string | number }
  readonly paddingY: (
    value: string | number
  ) => { readonly paddingTop: string; readonly paddingBottom: string | number }
  readonly padding0: (value: string) => { readonly padding: string }
  readonly padding1: (value: string) => { readonly padding: string }
  readonly padding2: (value: string) => { readonly padding: string }
  readonly padding3: (value: string) => { readonly padding: string }
  readonly padding4: (value: string) => { readonly padding: string }
  readonly padding5: (value: string) => { readonly padding: string }
  readonly padding6: (value: string) => { readonly padding: string }
  readonly padding7: (value: string) => { readonly padding: string }
  readonly padding8: (value: string) => { readonly padding: string }
  readonly padding9: (value: string) => { readonly padding: string }
  readonly padding10: (value: string) => { readonly padding: string }
  readonly p: (value: string | number) => { readonly padding: string | number }
  readonly pTop: (
    value: string | number
  ) => { readonly paddingTop: string | number }
  readonly pRight: (
    value: string | number
  ) => { readonly paddingRight: string | number }
  readonly pBottom: (
    value: string | number
  ) => { readonly paddingBottom: string | number }
  readonly pLeft: (
    value: string | number
  ) => { readonly paddingLeft: string | number }
  readonly pX: (
    value: string
  ) => { readonly paddingRight: string; readonly paddingLeft: string }
  readonly pY: (
    value: string
  ) => { readonly paddingTop: string; readonly paddingBottom: string }
  readonly p0: (value: string) => { readonly padding: string }
  readonly p1: (value: string) => { readonly padding: string }
  readonly p2: (value: string) => { readonly padding: string }
  readonly p3: (value: string) => { readonly padding: string }
  readonly p4: (value: string) => { readonly padding: string }
  readonly p5: (value: string) => { readonly padding: string }
  readonly p6: (value: string) => { readonly padding: string }
  readonly p7: (value: string) => { readonly padding: string }
  readonly p8: (value: string) => { readonly padding: string }
  readonly p9: (value: string) => { readonly padding: string }
  readonly p10: (value: string) => { readonly padding: string }

  /*
   * Elevate/ Box Sizing
   */
  readonly elevate: (
    elevate: ElevateInterface
  ) => (boxShadow: string) => { readonly boxShadow: string }
  readonly e: (
    elevate: ElevateInterface
  ) => (boxShadow: string) => { readonly boxShadow: string }
  readonly boxSizing: (
    boxSizing: BoxSizingTypes
  ) => { readonly boxSizing: BoxSizingTypes }
  readonly bs: (
    boxSizing: BoxSizingTypes
  ) => { readonly boxSizing: BoxSizingTypes }

  /*
   * Centered
   */
  readonly centered: () => { readonly margin: string }
  readonly cd: () => { readonly margin: string }

  /*
   * Flex
   */
  readonly flex: (flex: string) => { readonly flex: string }
  readonly fl: (flex: string) => { readonly flex: string }
  readonly flexGrow: (
    flexGrow: number | string
  ) => { readonly flexGrow: number | string }
  readonly flg: (flexGrow: string) => { readonly flexGrow: string }
  readonly flexShrink: (
    flexShrink: string | number
  ) => { readonly flexShrink: string | number }
  readonly fls: (
    flexShrink: string | number
  ) => { readonly flexShrink: string | number }
  readonly flexDirection: (
    flexDirection: FlexDirectionTypes
  ) => { readonly flexDirection: FlexDirectionTypes }
  readonly fld: (
    flexDirection: FlexDirectionTypes
  ) => { readonly flexDirection: FlexDirectionTypes }
  readonly flexWrap: (
    flexWrap: FlexWrapTypes
  ) => { readonly flexWrap: FlexWrapTypes }
  readonly flw: (
    flexWrap: FlexWrapTypes
  ) => { readonly flexWrap: FlexWrapTypes }
  readonly flexBasis: (
    flexBasis: string | number
  ) => { readonly flexBasis: string | number }
  readonly flb: (
    flexBasis: string | number
  ) => { readonly flexBasis: string | number }

  readonly order: (
    order: number | string
  ) => { readonly order: number | string }
  readonly od: (
    flexShrink: number | string
  ) => { readonly order: number | string }

  readonly justifyContent: (
    justifyContent: FlexContentTypes
  ) => { readonly justifyContent: FlexContentTypes }
  readonly jc: (
    justifyContent: FlexContentTypes
  ) => { readonly justifyContent: FlexContentTypes }
  readonly justifyItems: (
    justifyItems: FlexItemsTypes
  ) => { readonly justifyItems: FlexItemsTypes }
  readonly ji: (
    justifyItems: FlexItemsTypes
  ) => { readonly justifyItems: FlexItemsTypes }
  readonly justifySelf: (
    justifySelf: FlexSelfTypes
  ) => { readonly justifySelf: FlexSelfTypes }
  readonly js: (
    justifySelf: FlexSelfTypes
  ) => { readonly justifySelf: FlexSelfTypes }

  readonly alignContent: (
    alignContent: FlexContentTypes
  ) => { readonly alignContent: FlexContentTypes }
  readonly ac: (
    alignContent: FlexContentTypes
  ) => { readonly alignContent: FlexContentTypes }
  readonly alignItems: (
    alignItems: FlexItemsTypes
  ) => { readonly alignItems: FlexItemsTypes }
  readonly ai: (
    alignItems: FlexItemsTypes
  ) => { readonly alignItems: FlexItemsTypes }
  readonly alignSelf: (
    alignSelf: FlexSelfTypes
  ) => { readonly alignSelf: FlexSelfTypes }
  readonly af: (
    alignSelf: FlexSelfTypes
  ) => { readonly alignSelf: FlexSelfTypes }

  /*
   * Width / Height
   */
  readonly h: (
    unit: UnitInterface
  ) => (height: string) => { readonly height: string }
  readonly w: (
    unit: UnitInterface
  ) => (width: string) => { readonly width: string }
  readonly maxWidth: (
    unit: UnitInterface
  ) => (maxWidth: string) => { readonly maxWidth: string }
  readonly mw: (
    unit: UnitInterface
  ) => (maxWidth: string) => { readonly maxWidth: string }
  readonly maxHeight: (
    unit: UnitInterface
  ) => (maxHeight: string) => { readonly maxHeight: string }
  readonly mh: (
    unit: UnitInterface
  ) => (maxHeight: string) => { readonly maxHeight: string }
  readonly widthHeight: (
    unit: UnitInterface
  ) => (value: string) => { readonly width: string; readonly height: string }
  readonly wh: (
    unit: UnitInterface
  ) => (value: string) => { readonly width: string; readonly height: string }

  /*
   * Text
   */
  readonly textAlign: (
    textAlign: string
  ) => { readonly textAlign: TextAlignTypes }
  readonly ta: (textAlign: string) => { readonly textAlign: TextAlignTypes }
  readonly truncate: () => {
    readonly overflow: 'hidden'
    readonly whiteSpace: 'ellipsis'
    readonly textOverflow: 'nowrap'
  }
  readonly tc: () => {
    readonly overflow: 'hidden'
    readonly whiteSpace: 'ellipsis'
    readonly textOverflow: 'nowrap'
  }
  readonly wordBreak: (
    wordBreak: WordBreakTypes
  ) => { readonly wordBreak: WordBreakTypes }
  readonly wb: (
    wordBreak: WordBreakTypes
  ) => { readonly wordBreak: WordBreakTypes }

  readonly listStyle: (
    listStyle: ListStyleTypes
  ) => { readonly listStyle: ListStyleTypes }
  readonly lt: (
    listStyle: ListStyleTypes
  ) => { readonly listStyle: ListStyleTypes }
  readonly listPosition: (
    listPosition: ListPositionTypes
  ) => { readonly listPosition: ListPositionTypes }
  readonly lp: (
    listPosition: ListPositionTypes
  ) => { readonly listPosition: ListPositionTypes }
  readonly textDecoration: (
    textDecoration: TextDecorationTypes
  ) => { readonly textDecoration: TextDecorationTypes }
  readonly td: (
    textDecoration: TextDecorationTypes
  ) => { readonly textDecoration: TextDecorationTypes }
  readonly textTransform: (
    textTransform: TextTransformTypes
  ) => { readonly textTransform: TextTransformTypes }
  readonly tt: (
    textTransform: TextTransformTypes
  ) => { readonly textTransform: TextTransformTypes }
  readonly verticalAlign: (
    verticalAlign: VerticalAlignTypes
  ) => { readonly verticalAlign: VerticalAlignTypes }
  readonly va: (
    verticalAlign: VerticalAlignTypes
  ) => { readonly verticalAlign: VerticalAlignTypes }
  readonly whiteSpace: (
    whiteSpace: WhiteSpaceTypes
  ) => { readonly whiteSpace: WhiteSpaceTypes }
  readonly ws: (
    whiteSpace: WhiteSpaceTypes
  ) => { readonly whiteSpace: WhiteSpaceTypes }

  /*
   * Media
   */
  readonly mq: (
    mediaQuires: MediaQueriesInterface
  ) => (value: { readonly [key: string]: any }) => DynamicStyleFunction

  /*
   * Position
   */
  readonly position: (
    position: PositionTypes
  ) => { readonly position: PositionTypes }
  readonly ps: (position: PositionTypes) => { readonly position: PositionTypes }
  readonly top: (top: string) => { readonly top: string | 'auto' }
  readonly bottom: (bottom: string) => { readonly bottom: string | 'auto' }
  readonly left: (left: string) => { readonly left: string | 'auto' }
  readonly right: (right: string) => { readonly right: string | 'auto' }

  /*
   * Floats
   */
  readonly float: (float: FloatTypes) => { readonly float: FloatTypes }
  readonly ft: (float: FloatTypes) => { readonly float: FloatTypes }

  readonly clear: () => `&::after {
    content: "";
    display: table;
    clear: both;
  }`
  readonly cf: () => `&::after {
    content: "";
    display: table;
    clear: both;
  }`

  /*
   * Overflow
   */
  readonly overflow: (
    overflow: OverflowTypes
  ) => { readonly overflow: OverflowTypes }
  readonly of: (overflow: OverflowTypes) => { readonly overflow: OverflowTypes }
  readonly overflowX: (
    overflowX: OverflowTypes
  ) => { readonly overflowX: OverflowTypes }
  readonly ox: (
    overflowX: OverflowTypes
  ) => { readonly overflow: OverflowTypes }
  readonly overflowY: (
    overflowY: OverflowTypes
  ) => { readonly overflowY: OverflowTypes }
  readonly oy: (
    overflowY: OverflowTypes
  ) => { readonly overflow: OverflowTypes }
  readonly overflowScrolling: (
    overflowScrolling: OverflowScrollingTypes
  ) => { readonly '-webkit-Overflow-scrolling': OverflowScrollingTypes }
  readonly os: (
    overflowScrolling: OverflowScrollingTypes
  ) => { readonly '-webkit-Overflow-scrolling': OverflowScrollingTypes }
  readonly overflowWrap: (
    overflowWrap: OverflowWrapTypes
  ) => { readonly overflowWrap: OverflowWrapTypes }
  readonly ow: (
    overflowWrap: OverflowWrapTypes
  ) => { readonly overflowWrap: OverflowWrapTypes }

  /*
   * Font
   */
  readonly fontSize: (
    font: FontInterface
  ) => (fontSize: string) => { readonly fontSize: string }
  readonly fs: (
    font: FontInterface
  ) => (fontSize: string) => { readonly fontSize: string }
  readonly lineHeight: (
    font: FontInterface
  ) => (lineHeight: string | number) => { readonly lineHeight: string | number }
  readonly lh: (
    font: FontInterface
  ) => (lineHeight: string | number) => { readonly lineHeight: string | number }
  readonly letterSpacing: (
    letterSpacing: string
  ) => { readonly letterSpacing: string }
  readonly ls: (letterSpacing: string) => { readonly letterSpacing: string }
  readonly fontWeight: (
    font: FontInterface
  ) => (fontWeight: string | number) => { readonly fontWeight: string | number }
  readonly fw: (
    font: FontInterface
  ) => (fontWeight: string | number) => { readonly fontWeight: string | number }
  readonly fontFamily: (
    font: FontInterface
  ) => (fontFamily: FontFamilyTypes) => { readonly fontFamily: string }
  readonly ff: (
    font: FontInterface
  ) => (fontFamily: FontFamilyTypes) => { readonly fontFamily: string }

  /*
   * Z Index
   */
  readonly zIndex: (
    zIndex: number | string | 'auto'
  ) => { readonly zIndex: number | string | 'auto' }
  readonly z: (
    zIndex: number | string | 'auto'
  ) => { readonly zIndex: number | string | 'auto' }

  /*
   * Object
   */
  readonly objectFit: (
    objectFit: ObjectFitTypes
  ) => { readonly objectFit: ObjectFitTypes }
  readonly ot: (
    objectFit: ObjectFitTypes
  ) => { readonly objectFit: ObjectFitTypes }
  readonly objectPosition: (
    objectPosition: ObjectPositionTypes
  ) => { readonly objectPosition: ObjectPositionTypes }
  readonly op: (
    objectPosition: ObjectPositionTypes
  ) => { readonly objectPosition: ObjectPositionTypes }

  /*
   * Visibility
   */
  readonly visibility: (
    visibility: VisibilityTypes
  ) => { readonly visibility: VisibilityTypes }
  readonly vs: (
    visibility: VisibilityTypes
  ) => { readonly visibility: VisibilityTypes }

  /*
   * Interactivity
   */
  readonly cursor: (cursor: CursorTypes) => { readonly cursor: CursorTypes }
  readonly cr: (cursor: CursorTypes) => { readonly cursor: CursorTypes }
  readonly appearance: (
    appearance: AppearanceCssTypes
  ) => { readonly appearance: AppearanceCssTypes }
  readonly ap: (
    appearance: AppearanceCssTypes
  ) => { readonly appearance: AppearanceCssTypes }
  readonly pointerEvents: (
    pointerEvents: PointerEventsTypes
  ) => { readonly pointerEvents: PointerEventsTypes }
  readonly pe: (
    pointerEvents: PointerEventsTypes
  ) => { readonly pointerEvents: PointerEventsTypes }
  readonly resize: (resize: ResizeTypes) => { readonly resize: ResizeTypes }
  readonly rs: (resize: ResizeTypes) => { readonly resize: ResizeTypes }
  readonly userSelect: (
    userSelect: UserSelectTypes
  ) => { readonly userSelect: UserSelectTypes }
  readonly us: (
    userSelect: UserSelectTypes
  ) => { readonly userSelect: UserSelectTypes }

  /*
   * Transition
   */
  readonly transition: (
    transition: TransitionTypes
  ) => { readonly transition: string }
  readonly tr: (transition: TransitionTypes) => { readonly transition: string }
  readonly easeFast: (props?: EasePropsInterface) => string
  readonly easeMedium: (props?: EasePropsInterface) => string
  readonly easeSlow: (props?: EasePropsInterface) => string
  readonly easeXslow: (props?: EasePropsInterface) => string

  readonly easeInFast: (props?: EasePropsInterface) => string
  readonly easeInMedium: (props?: EasePropsInterface) => string
  readonly easeInSlow: (props?: EasePropsInterface) => string
  readonly easeInXslow: (props?: EasePropsInterface) => string

  readonly easeInOutFast: (props?: EasePropsInterface) => string
  readonly easeInOutMedium: (props?: EasePropsInterface) => string
  readonly easeInOutSlow: (props?: EasePropsInterface) => string
  readonly easeInOutXslow: (props?: EasePropsInterface) => string

  readonly easeOutFast: (props?: EasePropsInterface) => string
  readonly easeOutMedium: (props?: EasePropsInterface) => string
  readonly easeOutSlow: (props?: EasePropsInterface) => string
  readonly easeOutXslow: (props?: EasePropsInterface) => string

  /*
   * Transforms
   */
  readonly transform: (transform: string) => { readonly transform: string }
  readonly tf: (transform: string) => { readonly transform: string }
}

export interface UtilityPropsInterface {
  /*
   * Color
   */
  readonly color?: ColorTypes
  readonly cl?: ColorTypes

  /*
   * Display
   */
  readonly display?: DisplayTypes
  readonly d?: DisplayTypes

  /*
   * Background
   */
  readonly background?: string
  readonly bg?: string
  readonly backgroundAttachment?: BackgroundAttachmentTypes
  readonly bga?: BackgroundAttachmentTypes
  readonly backgroundClip?: BackgroundClipTypes
  readonly bgl?: BackgroundClipTypes
  readonly backgroundColor?: ColorTypes
  readonly bgc?: ColorTypes
  readonly backgroundPosition?: BackgroundPositionTypes
  readonly bgp?: BackgroundPositionTypes
  readonly backgroundRepeat?: BackgroundRepeatTypes
  readonly bgr?: BackgroundRepeatTypes
  readonly backgroundSize?: BackgroundSizeTypes
  readonly bgs?: BackgroundSizeTypes
  readonly backgroundImage?: string
  readonly bgi?: string

  /*
   * Border
   */
  readonly border: string
  readonly borderBottom: string
  readonly borderLeft: string
  readonly borderRight: string
  readonly borderTop: string
  readonly borderX: string
  readonly borderY: string
  readonly borderColor: string
  readonly borderStyle: string
  readonly bdb: string
  readonly bdl: string
  readonly bdr?: string
  readonly bdt?: string
  readonly bdx?: string
  readonly bdy?: string
  readonly bdw?: string
  readonly bdc?: ColorTypes
  readonly bds?: BorderStyleTypes

  readonly radius?: string
  readonly borderBottomRadius?: string
  readonly borderLeftRadius?: string
  readonly borderRightRadius?: string
  readonly borderTopRadius?: string
  readonly borderXRadius?: string
  readonly borderYRadius?: string
  readonly r?: string
  readonly rb?: string
  readonly rl?: string
  readonly rr?: string
  readonly rt?: string
  readonly rx?: string
  readonly ry?: string

  /*
   * Margin
   */
  readonly margin?: string | number
  readonly marginTop?: string | number
  readonly marginRight?: string | number
  readonly marginBottom?: string | number
  readonly marginLeft?: string | number
  readonly marginX?: string | number
  readonly marginY?: string | number
  readonly margin0?: string
  readonly margin1?: string
  readonly margin2?: string
  readonly margin3?: string
  readonly margin4?: string
  readonly margin5?: string
  readonly margin6?: string
  readonly margin7?: string
  readonly margin8?: string
  readonly margin9?: string
  readonly margin10?: string
  readonly m?: string | number
  readonly mt?: string | number
  readonly mr?: string | number
  readonly mb?: string | number
  readonly ml?: string | number
  readonly mx?: string | number
  readonly my?: string | number
  readonly m0?: string
  readonly m1?: string
  readonly m2?: string
  readonly m3?: string
  readonly m4?: string
  readonly m5?: string
  readonly m6?: string
  readonly m7?: string
  readonly m8?: string
  readonly m9?: string
  readonly m10?: string

  /*
   * Padding
   */
  readonly padding?: string | number
  readonly paddingTop?: string | number
  readonly paddingRight?: string | number
  readonly paddingBottom?: string | number
  readonly paddingLeft?: string | number
  readonly paddingX?: string | number
  readonly paddingY?: string | number
  readonly padding0?: string
  readonly padding1?: string
  readonly padding2?: string
  readonly padding3?: string
  readonly padding4?: string
  readonly padding5?: string
  readonly padding6?: string
  readonly padding7?: string
  readonly padding8?: string
  readonly padding9?: string
  readonly padding10?: string
  readonly p?: string | number
  readonly pt?: string | number
  readonly pr?: string | number
  readonly pb?: string | number
  readonly pl?: string | number
  readonly pX?: string
  readonly pY?: string
  readonly p0?: string
  readonly p1?: string
  readonly p2?: string
  readonly p3?: string
  readonly p4?: string
  readonly p5?: string
  readonly p6?: string
  readonly p7?: string
  readonly p8?: string
  readonly p9?: string
  readonly p10?: string

  /*
   * Elevate/ Box Sizing
   */
  readonly elevate?: string
  readonly e?: string
  readonly boxSizing?: string
  readonly bs?: string

  /*
   * Centered
   */
  readonly centered?: string
  readonly cd?: string

  /*
   * Flex
   */
  readonly flex?: string
  readonly fl?: string
  readonly flexGrow?: number | string
  readonly flg?: string
  readonly flexShrink?: string | number
  readonly fls?: string | number
  readonly flexDirection?: FlexDirectionTypes
  readonly fld?: FlexDirectionTypes
  readonly flexWrap?: FlexWrapTypes
  readonly flw?: FlexWrapTypes
  readonly flexBasis?: string | number
  readonly flb?: string | number

  readonly order?: number | string
  readonly od?: number | string

  readonly justifyContent?: FlexContentTypes
  readonly jc?: FlexContentTypes
  readonly justifyItems?: FlexItemsTypes
  readonly ji?: FlexItemsTypes
  readonly justifySelf?: FlexSelfTypes
  readonly js?: FlexSelfTypes

  readonly alignContent?: FlexContentTypes
  readonly ac?: FlexContentTypes
  readonly alignItems?: FlexItemsTypes
  readonly ai?: FlexItemsTypes
  readonly alignSelf?: FlexSelfTypes
  readonly af?: FlexSelfTypes

  /*
   * Width / Height
   */
  readonly h?: string
  readonly w?: string
  readonly maxWidth?: string
  readonly mw?: string
  readonly maxHeight?: string
  readonly mh?: string
  readonly widthHeight?: string
  readonly wh?: string

  /*
   * Text
   */
  readonly textAlign?: TextAlignTypes
  readonly ta?: TextAlignTypes
  readonly truncate?: boolean
  readonly tc?: boolean
  readonly wordBreak?: WordBreakTypes
  readonly wb?: WordBreakTypes
  readonly listStyle?: ListStyleTypes
  readonly lt?: ListStyleTypes
  readonly listPosition?: ListPositionTypes
  readonly lp?: ListPositionTypes
  readonly textDecoration?: TextDecorationTypes
  readonly td?: TextDecorationTypes
  readonly textTransform?: TextTransformTypes
  readonly tt?: TextTransformTypes
  readonly verticalAlign?: VerticalAlignTypes
  readonly va?: VerticalAlignTypes
  readonly whiteSpace?: WhiteSpaceTypes
  readonly ws?: WhiteSpaceTypes

  /*
   * Media
   */
  readonly mediaQuires: MediaQuiresTypes
  readonly mq: MediaQuiresTypes

  /*
   * Position
   */
  readonly position: PositionTypes
  readonly ps: PositionTypes
  readonly top: string | 'auto'
  readonly bottom: string | 'auto'
  readonly left: string | 'auto'
  readonly right: string | 'auto'

  /*
   * Floats
   */
  readonly float?: FloatTypes
  readonly ft?: FloatTypes

  readonly clear?: boolean
  readonly cf?: boolean

  /*
   * Overflow
   */
  readonly overflow?: OverflowTypes
  readonly of?: OverflowTypes
  readonly overflowX?: OverflowTypes
  readonly ox?: OverflowTypes
  readonly overflowY?: OverflowTypes
  readonly oy?: OverflowTypes
  readonly overflowScrolling?: OverflowScrollingTypes
  readonly os?: OverflowScrollingTypes
  readonly overflowWrap?: OverflowWrapTypes
  readonly ow?: OverflowWrapTypes

  /*
   * Font
   */
  readonly fontSize?: string
  readonly fs?: string
  readonly lineHeight?: string | number
  readonly lh?: string | number
  readonly letterSpacing?: string
  readonly ls?: string
  readonly fontWeight?: string | number
  readonly fw?: string | number
  readonly fontFamily?: string
  readonly ff?: string

  /*
   * Z Index
   */
  readonly zIndex?: number | string | 'auto'
  readonly z?: number | string | 'auto'

  /*
   * Object
   */
  readonly objectFit?: ObjectFitTypes
  readonly ot?: ObjectFitTypes
  readonly objectPosition?: ObjectPositionTypes
  readonly op?: ObjectPositionTypes

  /*
   * Visibility
   */
  readonly visibility?: VisibilityTypes
  readonly vs?: VisibilityTypes

  /*
   * Interactivity
   */
  readonly cursor?: CursorTypes
  readonly cr?: CursorTypes
  readonly appearance?: AppearanceCssTypes
  readonly ap?: AppearanceCssTypes
  readonly pointerEvents?: PointerEventsTypes
  readonly pe?: PointerEventsTypes
  readonly resize?: ResizeTypes
  readonly rs?: ResizeTypes
  readonly userSelect?: UserSelectTypes
  readonly us?: UserSelectTypes

  /*
   * Transition
   */
  readonly transition?: string
  readonly tr?: string
  readonly easeFast: (props?: EasePropsInterface) => string
  readonly easeMedium: (props?: EasePropsInterface) => string
  readonly easeSlow: (props?: EasePropsInterface) => string
  readonly easeXslow: (props?: EasePropsInterface) => string

  readonly easeInFast: (props?: EasePropsInterface) => string
  readonly easeInMedium: (props?: EasePropsInterface) => string
  readonly easeInSlow: (props?: EasePropsInterface) => string
  readonly easeInXslow: (props?: EasePropsInterface) => string

  readonly easeInOutFast: (props?: EasePropsInterface) => string
  readonly easeInOutMedium: (props?: EasePropsInterface) => string
  readonly easeInOutSlow: (props?: EasePropsInterface) => string
  readonly easeInOutXslow: (props?: EasePropsInterface) => string

  readonly easeOutFast: (props?: EasePropsInterface) => string
  readonly easeOutMedium: (props?: EasePropsInterface) => string
  readonly easeOutSlow: (props?: EasePropsInterface) => string
  readonly easeOutXslow: (props?: EasePropsInterface) => string
  /*
   * Transforms
   */
  readonly transform?: string
  readonly tf?: string

  /*
   * Filters
   */
  readonly filter?: string
  readonly filterBlur?: string
  readonly filterBrightness?: string
  readonly filterContrast?: string
  readonly filterDropShadow?: string
  readonly filterGrayscale?: string
  readonly filterHueRotate?: string
  readonly filterOpacity?: string
  readonly filterSaturate?: string
  readonly filterSepia?: string
  readonly fr?: string
  readonly frr?: string
  readonly frb?: string
  readonly frc?: string
  readonly frd?: string
  readonly frg?: string
  readonly frh?: string
  readonly fro?: string
  readonly frs?: string
  readonly frp?: string

  /*
   * Opacity
   */
  readonly opacity0?: string
  readonly opacity25?: string
  readonly opacity50?: string
  readonly opacity75?: string
  readonly opacity100?: string
  readonly o0?: string
  readonly o25?: string
  readonly o50?: string
  readonly o75?: string
  readonly o100?: string
}

export type TransitionTypes = TransitionInterface | string

export type FlexDirectionTypes =
  | 'column'
  | 'column-reverse'
  | 'row-reverse'
  | 'revert'
  | 'row'
  | string

export type FlexWrapTypes = 'nowrap' | 'wrap' | 'wrap-reverse' | string

export type FlexPositionTypes =
  | 'flex-start'
  | 'flex-end '
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | string

export type FlexContentTypes = FlexPositionTypes | string

export type FlexItemsTypes = FlexPositionTypes | string

export type FlexSelfTypes = FlexPositionTypes | 'baseline' | string

export type PartialUtilityInterface = Partial<UtilityInterface>

export type PositionTypes =
  | 'absolute'
  | 'relative'
  | 'fixed'
  | 'static'
  | 'sticky'
  | string

export type ObjectFitTypes =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'none'
  | 'scale-down'
  | string

export type ObjectPositionTypes =
  | 'bottom'
  | 'center'
  | 'left'
  | 'left-bottom	'
  | 'left-top'
  | 'right'
  | 'right-bottom'
  | 'right-top'
  | 'top'
  | string

export type BoxSizingTypes = 'border-box' | 'content-box' | string

export type DisplayTypes =
  | 'block'
  | 'inline-block'
  | 'inline'
  | 'flex'
  | 'inline-flex'
  | 'table'
  | 'table-caption'
  | 'table-cell'
  | 'table-column'
  | 'table-column-group'
  | 'table-footer-group'
  | 'table-header-group'
  | 'table-row-group'
  | 'table-row'
  | 'flow-root'
  | 'grid'
  | 'inline-grid'
  | 'contents'
  | 'none'
  | string

export type FloatTypes = 'right' | 'left' | 'none' | string

export type OverflowTypes = 'visible' | 'scroll' | 'auto' | 'hidden' | string
export type OverflowScrollingTypes = 'touch' | 'auto' | string
export type OverflowWrapTypes = 'normal' | 'break-word' | string

export type VisibilityTypes = 'visible' | 'hidden' | string

export type TextAlignTypes = 'left' | 'right' | 'center' | 'justify' | string
export type ListStyleTypes = 'none' | 'disc' | 'decimal' | string
export type ListPositionTypes = 'inside' | 'outside' | string
export type TextDecorationTypes = 'underline' | 'line-through' | 'none' | string
export type TextTransformTypes =
  | 'uppercase'
  | 'lowercase'
  | 'capitalize'
  | 'none'
  | string
export type VerticalAlignTypes =
  | 'baseline'
  | 'top'
  | 'middle'
  | 'bottom'
  | 'text-top'
  | 'text-bottom'
  | string
export type WhiteSpaceTypes =
  | 'normal'
  | 'nowrap'
  | 'pre'
  | 'pre-line'
  | 'pre-wrap'
  | string
export type WordBreakTypes = 'normal' | 'break-all' | string

export type BackgroundAttachmentTypes = 'fixed' | 'local' | 'scroll' | string
export type BackgroundClipTypes =
  | 'border-box'
  | 'padding-box'
  | 'content-box'
  | 'text'
  | string

export type BackgroundPositionTypes =
  | 'bottom'
  | 'center'
  | 'left'
  | 'left bottom'
  | 'left top'
  | 'right'
  | 'right bottom'
  | 'right top'
  | 'top'
  | string

export type BackgroundRepeatTypes =
  | 'repeat'
  | 'no-repeat'
  | 'repeat-x'
  | 'repeat-y'
  | 'round'
  | 'space'
  | string

export type BackgroundSizeTypes = 'auto' | 'cover' | 'contain' | string

export type BorderStyleTypes =
  | 'solid'
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'none'
  | 'groove'
  | 'outset'
  | 'outset'
  | 'ridge'
  | string

export type ColorTypes =
  | ColorInterface
  | 'transparent'
  | 'currentColor'
  | string

export type CursorTypes =
  | 'auto'
  | 'default'
  | 'pointer'
  | 'wait'
  | 'text'
  | 'move'
  | 'not-allowed'
  | string

export type AppearanceCssTypes = 'auto' | 'none' | string
export type PointerEventsTypes = 'auto' | 'none' | string
export type ResizeTypes = 'none' | 'vertical' | 'horizontal' | 'both' | string
export type UserSelectTypes = 'none' | 'text' | 'all' | 'auto' | string

export type MediaQuiresTypes =
  | {
      readonly [key: string]: any
    }
  | readonly string[]

export type EaseTypes =
  | typeof EASE
  | typeof EASE_IN
  | typeof EASE_OUT
  | typeof EASE_IN_OUT
export interface TransitionEaseInterface {
  readonly delay?: string
  readonly ease?: EaseTypes | string
  readonly property?: string
  readonly speed?: TransitionSpeedTypes | string
}

export type EasePropsInterface = Pick<
  TransitionEaseInterface,
  'property' | 'delay'
>
