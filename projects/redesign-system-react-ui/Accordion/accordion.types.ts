import { ThemeComponentInterface } from '@redesign-system/theme'

import {
  TabsInterface,
  TabButtonInterface,
  TabButtonIconInterface,
} from '../Tabs'

export type AccordionInterface = TabsInterface

export interface AccordionItemInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
}

export type AccordionButtonInterface = TabButtonInterface

export type AccordionButtonIconInterface = TabButtonIconInterface

export type AccordionContentInterface = ThemeComponentInterface
