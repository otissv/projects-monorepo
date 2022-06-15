import React, { FC } from 'react'

import { HeaderInterface } from './header.types'
import { Heading, HeadingInterface } from '../Heading'
import { CoverImage } from '../CoverImage'
import { isString } from 'c-ufunc/isString'
import { Either } from '../Either'
import { headerTheme } from './header.theme'
import { Maybe } from '../Maybe'

export const Header: FC<HeaderInterface> = function Header({
  as = 'header',
  children,
  className = '',
  css = '',
  height,
  backgroundImageUrl,
  heading,
  overlay,
  ...propsRest
}) {
  const classNames = `Header ${className}`
  const cssList = [headerTheme, css]

  return (
    <CoverImage
      as={as}
      className={classNames}
      src={backgroundImageUrl}
      overlay={overlay}
      height={height ? height : '450px'}
      css={cssList}
      {...propsRest}
    >
      <Maybe check={Boolean(heading)}>
        <Either check={isString(heading as string)}>
          <Heading title={heading as string} />
          <Heading {...(heading as HeadingInterface)} />
        </Either>
      </Maybe>
      {children}
    </CoverImage>
  )
}
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
Header.displayName = 'Header'