import React, { FC } from 'react'

import { Base } from '@redesign-system/react/Base'
import { useTheme } from '@redesign-system/react/ThemeContext'

import { AlertInterface } from './alert.types'
import { alertTheme, alertAppearanceTheme } from './alert.theme'

export const Alert: FC<AlertInterface> = function Alert({
  as = 'div',
  children,
  className = '',
  css = '',
  opened = true,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Alert ${className}`
  const cssList: any = [alertTheme, alertAppearanceTheme, css]

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      hidden={!opened}
      {...propsRest}
    >
      {children}
    </Base>
  )
}

// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
Alert.displayName = 'Alert'
