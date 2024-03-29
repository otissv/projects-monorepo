import React, { FC } from 'react'

import { Base, useTheme } from '@redesign-system/react/libs'

import { FieldsetInterface } from './fieldset.types'
import { fieldsetTheme } from './fieldset.theme'
import { Legend } from '../Legend'

export const Fieldset: FC<FieldsetInterface> = function Fieldset({
  as = 'fieldset',
  children,
  className = '',
  css = '',
  legend,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Fieldset ${className}`
  const cssList = [fieldsetTheme, css]

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      {...propsRest}
    >
      {
        (legend =
          typeof legend === 'string' ? (
            <Legend>{legend}</Legend>
          ) : (
            <Legend {...legend} />
          ))
      }
      {children}
    </Base>
  )
}

// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
Fieldset.displayName = 'Fieldset'
