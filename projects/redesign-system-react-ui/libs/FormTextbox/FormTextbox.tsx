import React, { FC } from 'react'
import { isString } from 'c-ufunc/isString'
import { SECONDARY_ERROR } from '@redesign-system/theme/libs'

import { FormTextBoxInterface } from './formTextbox.types'

import { Base, useTheme } from '@redesign-system/react/libs'
import { Maybe } from '../Maybe'
import { Either } from '../Either'
import { Textbox } from '../Textbox'
import { ErrorMessage, ErrorMessageInterface } from '../ErrorMessage'
import { Label, LabelInterface } from '../Label'
import { formTextboxTheme } from './formTextboxField.theme'

interface HelpMessageInterface {
  readonly required?: boolean
}

function HelpMessage({ children }: any) {
  return <p>{children}</p>
}

export const FormTextbox: FC<FormTextBoxInterface> = function FormTextbox({
  children,
  as = 'div',
  control,
  className = '',
  css = '',
  errorMessage = {},
  helpMessage,
  id,
  label,
  placeholder,
  required,
  value = '',
  onChange,
  onFocus,
  onBlur,
  appearance,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `FormTextbox ${className}`
  const cssList = [formTextboxTheme, css]

  const invalid =
    (typeof errorMessage === 'string' && !!errorMessage) ||
    !!(errorMessage as Partial<ErrorMessageInterface>)?.children

  return (
    <Base
      as={as}
      className={classNames}
      theme={theme}
      css={cssList}
      {...propsRest}
    >
      <Base theme={theme}>
        <Maybe check={Boolean(label)}>
          <Either check={isString(label as string)}>
            <Label htmlFor={id} required={required}>
              {label}
            </Label>
            <Label {...(label as LabelInterface)} htmlFor={id} />
          </Either>
        </Maybe>

        <Textbox
          placeholder={placeholder}
          required={required}
          value={value}
          invalid={invalid}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          {...control}
          id={id}
          label={label as string}
          appearance={
            invalid ? SECONDARY_ERROR : appearance || control?.appearance
          }
        />

        {children}

        <Maybe check={invalid}>
          <Either check={isString(errorMessage as string)}>
            <ErrorMessage required={required}>{errorMessage}</ErrorMessage>
            <ErrorMessage
              {...(errorMessage as ErrorMessageInterface)}
              required={required}
            />
          </Either>
        </Maybe>
      </Base>

      <Maybe check={Boolean(helpMessage)}>
        <Either check={isString(helpMessage as string)}>
          <HelpMessage required={required}>{helpMessage}</HelpMessage>
          <HelpMessage
            {...(helpMessage as HelpMessageInterface)}
            required={required}
          />
        </Either>
      </Maybe>
    </Base>
  )
}
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
FormTextbox.displayName = 'FormTextbox'
