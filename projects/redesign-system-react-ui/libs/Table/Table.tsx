import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/react/libs'

import { TableInterface } from './table.types'
import { tableTheme } from './table.theme'

export const Table: FC<TableInterface> = function Table({
  as = 'table',
  children,
  className = '',
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Table ${className}`
  const cssList = [tableTheme, css]

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      {...propsRest}
    >
      {children}
    </Base>
  )
}