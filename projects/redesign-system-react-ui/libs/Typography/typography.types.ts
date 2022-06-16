import {
  ThemeComponentInterface,
  AppearanceBaseTypes,
} from '@redesign-system/theme/libs'

export const LEAD = 'LEAD'
export const META = 'META'

export type ModifyType = typeof LEAD | typeof META

export interface TypographyInterface extends ThemeComponentInterface {
  readonly appearance?: AppearanceBaseTypes
  readonly children?: Omit<React.ReactNode, 'React.ReactPortal'>
  readonly href?: string
  readonly modify?: ModifyType
  readonly role?: string
}
