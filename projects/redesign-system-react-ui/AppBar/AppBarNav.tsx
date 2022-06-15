import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/react'

import { appBarNavTheme } from './appBar.theme'
import { AppBarNavInterface } from './appBar.types'

export const AppBarNav: FC<AppBarNavInterface> = function AppBarNav({
  as = 'div',
  className = '',
  css = '',
  children,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `AppBarNav ${className}`
  const cssList = [appBarNavTheme, css]

  return (
    <Base
      as={as}
      className={classNames}
      css={cssList}
      theme={theme}
      {...propsRest}
    >
      {children}
    </Base>
  )
}
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
AppBarNav.displayName = 'AppBarNav'
