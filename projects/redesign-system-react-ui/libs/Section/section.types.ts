import { ThemeComponentInterface } from '@redesign-system/theme/libs'

import { HeadingInterface } from '../Heading'

export interface SectionInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
  readonly heading?: string | HeadingInterface
}
