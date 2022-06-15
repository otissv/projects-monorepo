import React, { FC } from 'react'

import { buttonGroupTheme, buttonStretchGroupTheme } from './buttonGroup.theme'
import { ButtonGroupInterface } from './buttonGroup.types'
import { Base, useTheme } from '@redesign-system/react'

export const ButtonGroup: FC<ButtonGroupInterface> = function ButtonGroup({
  as = 'div',
  children,
  className = '',
  css = '',
  stretch,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `ButtonGroup ${className}`

  const cssList = [buttonGroupTheme, buttonStretchGroupTheme, css]
  return (
    <Base
      as={as}
      role="group"
      className={classNames}
      css={cssList}
      theme={theme}
      stretch={stretch}
      {...propsRest}
    >
      {children}
    </Base>
  )
}

// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
ButtonGroup.displayName = 'ButtonGroup'
