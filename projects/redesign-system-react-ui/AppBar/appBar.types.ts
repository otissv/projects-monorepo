/* eslint-disable functional/no-return-void */
import {
  ThemeComponentInterface,
  AppearanceBaseTypes,
} from '@redesign-system/theme'
import { IconInterface } from '@redesign-system/react'

import {
  ButtonGroupInterface,
  ButtonGroupButtonIconInterface,
  ButtonGroupButtonInterface,
} from '../ButtonGroup'
import { TextboxInterface } from '../Textbox'

export type PositionType =
  | 'fixed'
  | 'absolute'
  | 'sticky'
  | 'static'
  | 'relative'

export interface AppBarInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
  readonly appearance?: AppearanceBaseTypes
  readonly position?: PositionType
  readonly opened?: boolean
}

export type AppBarNavInterface = ThemeComponentInterface

export type AppBarButtonGroupInterface = ButtonGroupInterface

export type AppBarButtonGroupButtonGroupInterface = ButtonGroupButtonInterface

export type AppBarButtonGroupButtonIconInterface = ButtonGroupButtonIconInterface

export interface AppBarSearchInterface extends TextboxInterface {
  readonly placeholder?: string
  readonly onSearch?: (e: any, { value }: { readonly value: any }) => void
  readonly textbox?: TextboxInterface
}

export interface AppBarPanelInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
}

export interface AppBarBrandInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
}

export interface AppBarFooterInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
}

export interface AppBarContentInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
}

export interface AppBarTriggerInterface extends ThemeComponentInterface {
  readonly children?: readonly React.ReactNode[]
  readonly opened?: boolean
  readonly onClick?: (e: any) => void
  readonly onChange?: (e: any) => void
  readonly triggerOn?: IconInterface
  readonly triggerOff?: IconInterface
}
