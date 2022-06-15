import React, { FC } from 'react'

import { tabsPanelTheme } from './tabs.theme'

import { TabPanelInterface } from './tabs.types'
import { Base, useTheme } from '@redesign-system/react/libs'

export const TabPanel: FC<TabPanelInterface> = function TabPanel({
  as = 'div',
  css = '',
  children,
  className = '',
  active,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `TabPanel ${className}`

  const cssList = [tabsPanelTheme, css]

  return active ? (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      tabIndex="0"
      {...propsRest}
    >
      {children}
    </Base>
  ) : null
}

// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
TabPanel.displayName = 'TabPanel'
