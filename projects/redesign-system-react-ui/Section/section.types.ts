import { ThemeComponentInterface } from '@redesign-system/theme'

import { HeadingInterface } from '../Heading'

export interface SectionInterface extends ThemeComponentInterface {
  readonly children?: React.ReactNode
  readonly heading?: string | HeadingInterface
}
