/* eslint-disable functional/no-return-void */
import React from 'react'

import {
  ThemeComponentInterface,
  AppearanceBaseTypes,
} from '@redesign-system/theme/libs'

export interface ToggleInterface extends ThemeComponentInterface {
  readonly children: readonly React.ReactNode[]
  readonly appearance?: AppearanceBaseTypes
  readonly checked?: boolean
  readonly disabled?: boolean
  readonly id: string
  readonly label: string
  readonly name?: string
  readonly onBlur?: (e: React.SyntheticEvent<EventTarget>) => void
  readonly onChange?: (e: React.SyntheticEvent<EventTarget>) => void
  readonly onFocus?: (e: React.SyntheticEvent<EventTarget>) => void
}
