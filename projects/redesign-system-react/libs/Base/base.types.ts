/* eslint-disable functional/no-return-void */
import { ThemeInterface, CssTypes } from '@redesign-system/theme/libs'

export type ChildrenPropsObjectType = Partial<BaseInterface>
export type ChildrenPropsFunctionType = (
  p: BaseInterface
) => Partial<BaseInterface>
export type ChildrenPropsTypes =
  | ChildrenPropsObjectType
  | ChildrenPropsFunctionType

export interface BaseInterface {
  readonly as?: string
  readonly animate?: string
  readonly animations?: {
    readonly [key: string]: { readonly [key: string]: AnimateInterface }
  }
  readonly children?: any
  readonly className?: string
  readonly childrenCss?: CssTypes
  readonly childrenProps?: ChildrenPropsTypes
  readonly theme: Partial<ThemeInterface>
  readonly css?: CssTypes
  readonly [key: string]: any
}

export interface AnimateInterface {
  readonly to: number | readonly number[] | string | readonly string[]

  readonly bounce?: number
  readonly damping?: number
  readonly driver?: any
  readonly duration?: number
  readonly ease?: any | readonly any[]
  readonly elapsed?: number
  readonly from?: number | string
  readonly mass?: number
  readonly offset?: readonly number[]
  readonly repeat?: number | 'Infinity'
  readonly repeatDelay?: number
  readonly repeatType?: 'loop' | 'mirror' | 'reverse'
  readonly restDelta?: number
  readonly restSpeed?: number
  readonly stiffness?: number
  readonly type?: 'keyframes' | 'spring' | 'decay'
  readonly velocity?: number
  readonly onUpdate?: (value: any) => void
  readonly onPlay?: () => void
  readonly onComplete?: () => void
  readonly onRepeat?: () => void
  readonly onStop?: () => void
}
