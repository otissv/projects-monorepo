import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/react/libs'

import { appBarContentTheme } from './appBar.theme'
import { AppBarContentInterface } from './appBar.types'

export const AppBarContent: FC<AppBarContentInterface> =
  function AppBarContent({
    as = 'div',
    className = '',
    css = '',
    children,
    ...propsRest
  }: any) {
    const { theme } = useTheme()
    const classNames = `AppBarContent ${className}`
    const cssList = [appBarContentTheme, css]

    return (
      <Base
        as={as}
        className={classNames}
        theme={theme}
        css={cssList}
        aria-orientation="horizontal"
        {...propsRest}
      >
        {children}
      </Base>
    )
  }
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
AppBarContent.displayName = 'AppBarContent'
