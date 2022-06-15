import { TypographyInterface } from '../Typography'

export interface LabelInterface extends TypographyInterface {
  readonly children?: React.ReactNode
  readonly htmlFor: string
  readonly required?: boolean
}
