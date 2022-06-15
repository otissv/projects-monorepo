import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/react/libs'

import { LegendInterface } from '././legend.types'
import { legendTheme } from '././legend.theme'

export const Legend: FC<LegendInterface> = function Legend({
  as = 'legend',
  className = '',
  css = '',
  children,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Fieldset ${className}`
  const cssList = [legendTheme, css]

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

// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
Legend.displayName = 'Legend'
