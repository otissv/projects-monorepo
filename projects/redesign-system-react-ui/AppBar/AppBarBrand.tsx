import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/react'

import { AppBarBrandInterface } from './appBar.types'
import { appBarBrandTheme } from './appBar.theme'

export const AppBarBrand: FC<AppBarBrandInterface> = function AppBarBrand({
  as = 'div',
  className = '',
  css = '',
  children,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `AppBarBrand ${className}`
  const cssList = [appBarBrandTheme, css]

  return (
    <Base
      as={as}
      css={cssList}
      className={classNames}
      theme={theme}
      {...propsRest}
    >
      {children}
    </Base>
  )
}

// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
AppBarBrand.displayName = 'AppBarBrand'
