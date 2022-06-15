import React, { FC } from 'react'

import { AccordionItemInterface } from './accordion.types'
import { accordionItemTheme } from './accordion.theme'
import { Base, useTheme } from '@redesign-system/react'

export const AccordionItem: FC<AccordionItemInterface> = function Alert({
  as = 'div',
  children,
  className = '',
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `AccordionItem ${className}`
  const cssList = [accordionItemTheme, css]

  return (
    <Base
      as={as}
      className={classNames}
      css={cssList}
      theme={theme}
      {...propsRest}
    >
      {children}
    </Base>
  )
}

// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
AccordionItem.displayName = 'AccordionItem'
