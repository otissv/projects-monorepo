/* eslint-disable functional/no-return-void */
import React from 'react'

import { ThemeComponentInterface } from '@redesign-system/theme'

export interface TextboxInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
  readonly disabled?: boolean
  readonly id: string
  readonly invalid?: boolean
  readonly name?: string
  readonly label: string
  readonly onBlur?: (e: React.SyntheticEvent<EventTarget>) => void
  readonly onChange?: (e: React.SyntheticEvent<EventTarget>) => void
  readonly onFocus?: (e: React.SyntheticEvent<EventTarget>) => void
  readonly placeholder?: string
  readonly required?: boolean
  readonly size?: number
  readonly stretch?: boolean
  readonly value?: string
  readonly widths?: number
}
