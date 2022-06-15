import { ThemeComponentInterface } from '@redesign-system/theme'

import { CaptionInterface } from '../Caption'

export interface FigureInterface extends ThemeComponentInterface {
  readonly caption?: string | CaptionInterface
  readonly figure?: any
}
