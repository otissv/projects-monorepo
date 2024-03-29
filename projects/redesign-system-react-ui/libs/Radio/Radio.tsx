import React, { FC } from 'react'

import {
  Base,
  useTheme,
  isComponentDisabled,
} from '@redesign-system/react/libs'

import { RadioInterface } from './radio.types'
import { radioTheme, radioContainerTheme } from './radio.theme'

export const Radio: FC<RadioInterface> = function Radio({
  appearance,
  as = 'div',
  className = '',
  disabled,
  id,
  label,
  name,
  onChange,
  css = '',
  ...propsRest
}: RadioInterface) {
  const { theme } = useTheme()
  const classNames = `Radio ${className}`
  const cssList = [radioTheme, css]
  const radioContainerCssList = [radioContainerTheme, css]

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
      as={as}
      appearance={appearance}
      theme={theme}
      className={classNames}
      css={cssList}
      {...propsRest}
    >
      <Base
        theme={theme}
        className="RadioContainer"
        css={radioContainerCssList}
        appearance={appearance}
      >
        <input
          className="RadioInput"
          disabled={isDisabled}
          id={id}
          name={name || id}
          onChange={onChange}
          type="radio"
          aria-label={label}
        />
        <div className="RadioBackground">
          <div className="RadioInnerCircle"></div>
          <div className="RadioOuterCircle"></div>
        </div>
      </Base>
    </Base>
  )
}
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
Radio.displayName = 'Radio'
