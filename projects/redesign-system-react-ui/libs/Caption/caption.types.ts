import { ThemeComponentInterface } from '@redesign-system/theme/libs'

export interface CaptionInterface
  extends Pick<ThemeComponentInterface, 'as' | 'className' | 'css' | 'theme'> {
  readonly children?: React.ReactNode
}
