import {
  ThemeComponentInterface,
  AppearanceBaseTypes,
} from '@redesign-system/theme'

export interface IconInterface extends ThemeComponentInterface {
  readonly alt?: string
  readonly appearance?: AppearanceBaseTypes
  readonly height?: string
  readonly hoverColor?: string
  readonly viewBox?: string
  readonly width?: string
  readonly title?: string
  readonly fill?: string | 'currentColor'
  readonly stroke?: string | 'currentColor'
  readonly strokeWidth?: number
}
