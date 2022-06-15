import {
  ThemeComponentInterface,
  AppearanceTypes,
} from '@redesign-system/theme/libs'

export interface BadgeInterface extends ThemeComponentInterface {
  readonly children: React.ReactNode
  readonly appearance?: AppearanceTypes
  readonly pill?: boolean
}
