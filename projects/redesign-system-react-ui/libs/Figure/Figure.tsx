import React, { FC } from 'react'

import { Base, useTheme } from '@redesign-system/react/libs'
import { mediaTheme, mediaFigureTheme } from './figure.theme'
import { Either } from '../Either'
import { FigureInterface } from './figure.type'
import { isString } from 'c-ufunc/libs/isString'
import { Caption, CaptionInterface } from '../Caption'
import { Maybe } from '../Maybe'

export const Figure: FC<FigureInterface> = function Media({
  as = 'div',
  className = '',
  css = '',
  children,
  caption,
  figure,
}) {
  const { theme } = useTheme()
  const classNames = `Media ${className}`
  const cssList = [mediaTheme, css]

  return (
    <Base as={as} className={classNames} theme={theme} css={cssList}>
      {children}
      <Base theme={theme} css={mediaFigureTheme} as="figure" {...figure} />

      <Maybe check={Boolean(caption)}>
        <Either check={isString(caption as string)}>
          <Caption>{caption}</Caption>
          <Caption {...(caption as CaptionInterface)} />
        </Either>
      </Maybe>
    </Base>
  )
}

// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
Figure.displayName = 'Figure'
