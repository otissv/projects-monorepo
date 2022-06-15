import React, { FC } from 'react'

import { tabsButtonTheme } from './tabs.theme'
import { ButtonGroupButtonIcon } from '../ButtonGroup'
import { useTheme } from '@redesign-system/react/libs'
import { TabButtonIconInterface } from './tabs.types'

export const TabButtonIcon: FC<TabButtonIconInterface> = function TabButton({
  as = 'button',
  children,
  className = '',
  css = '',
  id,
  onClick,
  stacked = false,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `TabButton ${className}`
  const cssList = [tabsButtonTheme, css]

  return (
    <ButtonGroupButtonIcon
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      onClick={onClick}
      stacked={stacked}
      id={id}
      {...propsRest}
    >
      {children}
    </ButtonGroupButtonIcon>
  )
}

// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
TabButtonIcon.displayName = 'TabButtonIcon'
