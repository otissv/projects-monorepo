import React from 'react'
import { ButtonInterface } from '../Button'
import { ThemeComponentInterface } from '@redesign-system/theme'
import {
  ButtonGroupInterface,
  ButtonGroupButtonIconInterface,
} from '../ButtonGroup'

export const SET_TAB_ACTIVE = 'SET_TAB_ACTIVE'
export const RESET_TABS = 'RESET_TABS'

export const TABS_ALIGN_TOP = 'TABS_ALIGN_TOP'
export const TABS_ALIGN_BOTTOM = 'TABS_ALIGN_BOTTOM'
export const TABS_ALIGN_LEFT = 'TABS_ALIGN_LEFT'
export const TABS_ALIGN_RIGHT = 'TABS_ALIGN_RIGHT'

export type TabStackedTypes =
  | typeof TABS_ALIGN_TOP
  | typeof TABS_ALIGN_BOTTOM
  | typeof TABS_ALIGN_LEFT
  | typeof TABS_ALIGN_RIGHT

export interface ResetTabsAction {
  readonly type: typeof RESET_TABS
}

export interface SetActiveTabAction {
  readonly type: typeof SET_TAB_ACTIVE
  readonly active: string
}

export type TabActionsTypes = SetActiveTabAction | ResetTabsAction

export interface TabStateInterface {
  readonly active?: string
}

export interface TabsInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
}

export type TabsListInterface = ButtonGroupInterface

export interface TabButtonInterface extends ButtonInterface {
  readonly active?: boolean
  readonly id: string
  readonly title: string
  readonly onClick?: any
}

export interface TabButtonIconInterface extends ButtonGroupButtonIconInterface {
  readonly active?: boolean
  readonly id: string
  readonly title: string
  readonly onClick?: any
}

export interface TabPanelInterface extends ThemeComponentInterface {
  readonly active: boolean
}
