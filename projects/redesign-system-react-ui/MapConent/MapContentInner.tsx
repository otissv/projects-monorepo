import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/react'

import { MapContentInnerInterface } from './mapContent.types'
import { mapContentInnerTheme } from './mapContent.theme'

export const MapContentInner: FC<MapContentInnerInterface> = function MapContentInner({
  as = 'div',
  className = '',
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `MapContentInner ${className}`
  const cssList = [mapContentInnerTheme, css]

  return (
    <Base
      as={as}
      css={cssList}
      className={classNames}
      theme={theme}
      {...propsRest}
    />
  )
}
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
MapContentInner.displayName = 'MapContentInner'
