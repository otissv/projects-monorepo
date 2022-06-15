import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/react'

import { toolbarTheme } from './toolbar.theme'
import { ToolbarInterface } from './toolbar.types'

export const Toolbar: FC<ToolbarInterface> = function Toolbar({
  children,
  className = '',
  css,
  ...propsRest
}) {
  const { theme } = useTheme()

  const classNames = `Toolbar ${className}`
  const cssList = [toolbarTheme, css]

  return (
    <Base className={classNames} css={cssList} theme={theme} {...propsRest}>
      {children}
    </Base>
  )
}
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
Toolbar.displayName = 'Toolbar'
