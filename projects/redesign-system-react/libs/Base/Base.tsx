import React, { FC, createElement, cloneElement } from 'react'
import { css as emotionCss } from '@emotion/css'
import { animate } from 'popmotion'
import { isFunction } from 'c-c-ufunc/libs/isFunction'

import {
  BaseInterface,
  ChildrenPropsObjectType,
  ChildrenPropsFunctionType,
} from './base.types'
import { createStyleString } from '../helpers/createStyleString'
import { buildCssUtilities } from '../helpers/buildCssUtilities'
import { ignoreAttributes } from './ignoreAttributes'

function CreateComponent({ tag = 'div', children, ...props }: any) {
  return createElement(
    tag,
    props,
    Array.isArray(children) ? [...children] : children
  )
}

function useAnimation({
  animate: active = '',
  animations,
}: any): Record<string, string | number> {
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

    // eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
    currentAnimation.current = active
  }, [active, animations])

  return styles
}

export const BaseComponent: FC<BaseInterface> = function Base(props) {
  const {
    animate: active = '',
    animations,
    as: tag,
    children,
    childrenCss,
    childrenProps,
    className = '',
    css = '',
    __ignore = [],
    ...propsRest
  } = props

  // merge styles into string
  const _styles = [
    ...(css ? [createStyleString(css, props)] : []),
    createStyleString(buildCssUtilities(props as any)),
  ]
    .filter((s) => s.trim() !== '')
    .join(';')
  const classNameStyles: string = emotionCss`${_styles}`

  const classNames = `Base ${classNameStyles} ${className}`

  // attributes
  const ignore = [
    ...ignoreAttributes,
    ...(Array.isArray(__ignore) ? __ignore : [__ignore]),
  ]

  const animationStyles = useAnimation({
    animate: active,
    animations,
  })

  const attributes: Record<string, any> = {
    style: animationStyles,
  }

  // eslint-disable-next-line functional/no-loop-statement
  for (const key in propsRest) {
    // eslint-disable-next-line functional/no-conditional-statement
    if (key === 'style') {
      // eslint-disable-next-line functional/immutable-data, functional/no-expression-statement
      attributes.style = {
        ...attributes.style,
        ...propsRest.style,
      }

      // eslint-disable-next-line functional/no-conditional-statement
    } else if (!ignore.includes(key)) {
      // eslint-disable-next-line functional/immutable-data,  functional/no-expression-statement
      attributes[key] = propsRest[key]
    }
  }

  // clone children props and css
  const clonedChildren =
    childrenProps || childrenCss
      ? React.Children.map(children, (child: any) => {
          if (!child) return null

          const childProps: { readonly [key: string]: any } | undefined =
            isFunction(childrenProps)
              ? childrenProps &&
                (childrenProps as ChildrenPropsFunctionType)(props)
              : childrenProps

          return child.props
            ? cloneElement(
                child,
                {
                  ...child.props,
                  ...(childProps || {}),
                  style: {
                    ...child.props?.style,
                    ...(childProps?.style || {}),
                  },
                  css: [
                    child.props.css || '',
                    childProps?.css || '',
                    childrenCss || '',
                  ],
                  className: `${child.props?.className || ''} ${
                    (childrenProps as ChildrenPropsObjectType)?.className || ''
                  }`,
                },
                child.props.children
              )
            : child
        })
      : children

  return (
    <CreateComponent
      className={classNames}
      tag={tag}
      children={clonedChildren}
      {...attributes}
    />
  )
}

export const Base = React.forwardRef<HTMLButtonElement, BaseInterface>(
  (props, ref) => {
    const { theme, ...propsRest } = props

    return <BaseComponent theme={theme} ref={ref} {...propsRest} />
  }
)

// eslint-disable-next-line functional/immutable-data, functional/no-expression-statement
BaseComponent.displayName = 'Base'
