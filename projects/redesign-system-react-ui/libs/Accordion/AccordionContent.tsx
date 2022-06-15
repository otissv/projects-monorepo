import React, { FC } from 'react'

import { AccordionContentInterface } from './accordion.types'
import { accordionContentTheme } from './accordion.theme'
import { Base, useTheme } from '@redesign-system/react/libs'

export const AccordionContent: FC<AccordionContentInterface> =
  function AccordionContent({
    as = 'div',
    css = '',
    children,
    className = '',
    active,
    ...propsRest
  }) {
    const { theme } = useTheme()
    const classNames = `AccordionContent ${className}`

    const cssList = [accordionContentTheme, css]

    return active ? (
      <Base
        as={as}
        className={classNames}
        theme={theme}
        css={cssList}
        tabIndex="0"
        {...propsRest}
      >
        {children}
      </Base>
    ) : null
  }

// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
AccordionContent.displayName = 'AccordionContent'
