import React, { FC } from 'react'

import { Base, useTheme } from '@redesign-system/react/libs'
import { AppBarPanelInterface } from './appBar.types'
import { appBarPanelTheme } from './appBar.theme'

export const AppBarPanel: FC<AppBarPanelInterface> = function AppBarPanel({
  className = '',
  children,
  css = '',
  ...propsRest
}: any) {
  const { theme } = useTheme()
  const classNames = `AppBarPanel ${className}`
  const cssList = [appBarPanelTheme, css]

  return (
    <Base theme={theme} css={cssList} className={classNames} {...propsRest}>
      {children}
    </Base>
  )
}

// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
AppBarPanel.displayName = 'AppBarPanel'
