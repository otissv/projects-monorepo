import React, { FC, Fragment } from 'react'
import { animate } from 'popmotion'

import { MatchInterface } from './match.types'

export const Match: FC<MatchInterface> = function Match({
  animate: active = '',
  children,
  animations,
  ...propsRest
}) {
  const currentAnimation = React.useRef<string>()

  function reducer(
    state: { readonly [key: string]: string | number },
    action: { readonly type: string; readonly value: string | number }
  ) {
    return {
      ...state,
      [action.type]: action.value,
    }
  }

  const [styles, dispatch] = React.useReducer(reducer, {})

  // eslint-disable-next-line functional/no-expression-statement
  React.useEffect(() => {
    if (!animations || currentAnimation.current === active) {
      return
    }

    // eslint-disable-next-line functional/no-loop-statement
    for (const key of Object.keys(animations[active] || {})) {
      const prop = animations[active][key]
      // eslint-disable-next-line functional/no-expression-statement
      ;(animate as any)({
        ...prop,
        onUpdate: (value: string | number) => {
          // eslint-disable-next-line functional/no-expression-statement
          dispatch({
            type: key,
            value,
          })
        },
      })
    }

    // eslint-disable-next-line functional/immutable-data, functional/no-expression-statement
    currentAnimation.current = active
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  const childrenArray = React.Children.toArray(children)

  const elements = []

  // eslint-disable-next-line functional/no-loop-statement
  for (const c of childrenArray) {
    const child: any = c

    const props = {
      ...child.props,
      ...propsRest,
      style: {
        ...child.props?.style,
        ...propsRest?.style,
        ...styles,
      },
    }

    const element = React.cloneElement(child, props, child.props?.children)
    // eslint-disable-next-line functional/no-expression-statement
    elements.push(element)
  }

  return <Fragment>{elements}</Fragment>
}

// eslint-disable-next-line functional/immutable-data, functional/no-expression-statement
Match.displayName = 'Match'
