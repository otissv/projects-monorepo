import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/react/libs'

import { DoubleContentInterface } from './doubleContent.types'
import { DoubleContentInner } from './DoubleContentInner'
import { doubleContentTheme } from './doubleContent.theme'

import { CoverImage } from '../CoverImage'

export const DoubleContent: FC<DoubleContentInterface> =
  function DoubleContent({
    as = 'div',
    children,
    className = '',
    coverImage,
    css = '',
    doubleContentInner,
    h,
    w,
    ...propsRest
  }) {
    const { theme } = useTheme()
    const classNames = `DoubleContent ${className}`
    const cssList = [doubleContentTheme, css]

    return (
      <Base
        as={as}
        css={cssList}
        className={classNames}
        theme={theme}
        h={h}
        w={w}
        {...propsRest}
      >
        <CoverImage fl="1" h={h || 'inherit'} {...coverImage} />

        <DoubleContentInner
          as={as}
          className={classNames}
          theme={theme}
          {...propsRest}
          {...doubleContentInner}
        >
          {children}
        </DoubleContentInner>
      </Base>
    )
  }
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
DoubleContent.displayName = 'DoubleContent'
