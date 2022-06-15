import React, { FC } from 'react'

import {
  Base,
  useTheme,
  isComponentDisabled,
} from '@redesign-system/react/libs'
import { ButtonInterface } from './button.types'

import {
  buttonTheme,
  buttonSizeTheme,
  buttonStretchTheme,
  buttonAppearanceTheme,
} from './button.theme'

export const Button: FC<ButtonInterface> = function Button({
  appearance,
  as = 'button',
  children,
  className = '',
  disabled,
  // eslint-disable-next-line @typescript-eslint/no-empty-function, prettier/prettier
  onClick = () => {},
  css = '',
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `Button ${className}`
  const cssList = [
    buttonTheme,
    buttonAppearanceTheme,
    buttonSizeTheme,
    buttonStretchTheme,
    css,
  ]

  const handleOnClick = React.useCallback(
    function handleOnClick(e: any) {
      // eslint-disable-next-line functional/no-expression-statement
      onClick(e)
    },
    [onClick]
  )

  const isDisabled = React.useMemo(
    () =>
      isComponentDisabled({
        appearance,
        disabled,
      }),
    [appearance, disabled]
  )

  return (
    <Base
      appearance={appearance}
      as={as}
      className={classNames}
      disabled={isDisabled}
      onClick={handleOnClick}
      role="button"
      tabIndex={0}
      theme={theme}
      css={cssList}
      __ignore="stretch"
      {...propsRest}
    >
      {children}
    </Base>
  )
}

// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
Button.displayName = 'Button'
