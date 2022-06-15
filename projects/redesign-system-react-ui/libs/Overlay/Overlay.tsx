import React, { FC } from 'react'

import { OverlayInterface } from './overlay.types'
import { overlayTheme } from './overlay.theme'
import { Base, useTheme } from '@redesign-system/react/libs'

export const Overlay: FC<OverlayInterface> = function Overlay({
  as = 'div',
  className = '',
  css = '',
  ...propsRest
}: OverlayInterface) {
  const { theme } = useTheme()
  const classNames = `Overlay ${className}`
  const cssList: any = [overlayTheme, css]

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      {...propsRest}
    />
  )
}

// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
Overlay.displayName = 'Overlay'
