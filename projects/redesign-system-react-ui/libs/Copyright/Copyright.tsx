import React, { FC } from 'react'

import { CopyrightInterface } from './copyright.types'
import { Base, useTheme } from '@redesign-system/react/libs'
import { copyrightTheme } from './copyright.theme'

export const Copyright: FC<CopyrightInterface> = function Copyright({
  children,
  as = 'small',
  className = '',
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Copyright ${className}`
  const cssList = [copyrightTheme, css]

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      {...propsRest}
    >
      Copyright © {children}
    </Base>
  )
}

// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
Copyright.displayName = 'Copyright'
