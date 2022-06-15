import React, { FC } from 'react'
import { MenuIcon } from '@redesign-system/react-material-icons/MenuIcon'
import { MenuOpenIcon } from '@redesign-system/react-material-icons/MenuOpenIcon'

import { appBarTriggerTheme } from './appBar.theme'
import { Toggle } from '../Toggle'
import { AppBarTriggerInterface } from './appBar.types'

export const AppBarTrigger: FC<AppBarTriggerInterface> = function AppBarTrigger({
  className = '',
  children,
  css = '',
  opened,
  onClick,
  onChange,
  triggerOn,
  triggerOff,
  ...propsRest
}) {
  const classNames = `AppBarTrigger ${className}`
  const cssList = [appBarTriggerTheme, css]
  const triggerDefault = [
    <MenuOpenIcon key={1} {...triggerOn} />,
    <MenuIcon key={2} {...triggerOff} />,
  ]

  return (
    <Toggle
      className={classNames}
      id="1"
      label="menu"
      onChange={onChange}
      onClick={onClick}
      css={cssList}
      {...propsRest}
      aria-haspopup="menu"
      aria-expanded={opened}
    >
      {children ? children : triggerDefault}
    </Toggle>
  )
}

// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
AppBarTrigger.displayName = 'AppBarTrigger'
