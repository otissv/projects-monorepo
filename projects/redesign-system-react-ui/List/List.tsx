import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/react'

import { ListInterface } from './list.types'
import { listTheme } from './list.theme'

export const List: FC<ListInterface> = function List({
  as = 'ul',
  children,
  className = '',
  css = '',
  columns,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `List ${className}`
  const cssList = [listTheme, css]

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      columns={columns}
      {...propsRest}
    >
      {children}
    </Base>
  )
}
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
List.displayName = 'List'
