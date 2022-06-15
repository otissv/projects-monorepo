import React, { FC } from 'react'
import { isString } from 'ufunc/isString'
import { SECONDARY_ERROR } from '@redesign-system/theme'

import { FormRadioInterface } from './formRadio.types'

import { Base, useTheme } from '@redesign-system/react'
import { Maybe } from '../Maybe'
import { Either } from '../Either'
import { Radio } from '../Radio'
import { ErrorMessage, ErrorMessageInterface } from '../ErrorMessage'
import { Label, LabelInterface } from '../Label'
import { formRadioTheme } from './formRadio.theme'

interface HelpMessageInterface {
  readonly required?: boolean
}

function HelpMessage({ children }: any) {
  return <p>{children}</p>
}

export const FormRadio: FC<FormRadioInterface> = function FormRadio({
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
  checked = false,
  onChange,
  onFocus,
  onBlur,
  appearance,
  name,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `FormRadio ${className}`
  const cssList = [formRadioTheme, css]

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
              <Radio
                placeholder={placeholder}
                required={required}
                checked={checked}
                invalid={invalid}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                {...control}
                id={id}
                name={name}
                label={label as string}
                appearance={
                  invalid ? SECONDARY_ERROR : appearance || control?.appearance
                }
              />{' '}
              {label}
              {children}
            </Label>
            <Label {...(label as LabelInterface)} htmlFor={id}>
              <Radio
                placeholder={placeholder}
                required={required}
                checked={checked}
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
              />{' '}
              {(label as LabelInterface)?.children}
              {children}
            </Label>
          </Either>
        </Maybe>

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
FormRadio.displayName = 'FormRadio'
