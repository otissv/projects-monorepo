/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-return-void */
import React from 'react'

import { animate } from 'popmotion'

interface AnimateInterface {
  readonly to: number | string | readonly (string | number)[]

  readonly bounce?: number
  readonly damping?: number
  readonly driver?: any
  readonly duration?: number
  readonly ease?: any | readonly any[]
  readonly elapsed?: number
  readonly from?: number | string
  readonly mass?: number
  readonly offset?: readonly number[]
  readonly repeat?: number
  readonly repeatDelay?: number
  readonly repeatType?: string
  readonly restDelta?: number
  readonly restSpeed?: number
  readonly stiffness?: number
  readonly type?: string
  readonly velocity?: number
  readonly onUpdate?: (value: any) => void
  readonly onPlay?: () => void
  readonly onComplete?: () => void
  readonly onRepeat?: () => void
  readonly onStop?: () => void
}

export function useAnimate({
  to,
  from,
  repeat,
  repeatDelay,
  repeatType,
  driver,
  type,
  ease,
  duration,
  offset,
  stiffness,
  damping,
  mass,
  velocity,
  bounce,
  restDelta,
  restSpeed,
  onUpdate,
  onPlay,
  onComplete,
  onRepeat,
  onStop,
}: AnimateInterface): readonly (
  | string
  | number
  | React.MutableRefObject<any>
  | undefined
)[] {
  const [state, setState] = React.useState(from)
  const animation = React.useRef<any>()

  React.useEffect(() => {
    animation.current = (animate as any)({
      from,
      to,
      repeat,
      repeatDelay,
      repeatType: repeatType as any,
      driver,
      type: type as any,
      onPlay,
      onComplete,
      onRepeat,
      onStop,
      ease,
      duration,
      offset,
      stiffness,
      damping,
      mass,
      velocity,
      bounce,
      restDelta,
      restSpeed,
      onUpdate: (value: string | number) => {
        setState(value)
        onUpdate && onUpdate(value)
      },
    })
  }, [
    from,
    to,
    repeat,
    repeatDelay,
    repeatType,
    driver,
    type,
    onUpdate,
    onPlay,
    onComplete,
    onRepeat,
    onStop,
    ease,
    duration,
    offset,
    stiffness,
    damping,
    mass,
    velocity,
    bounce,
    restDelta,
    restSpeed,
  ])

  return [state, animation]
}
