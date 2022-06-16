import { TypographyInterface } from '../Typography'

export interface LabelInterface extends TypographyInterface {
  readonly children?: Omit<React.ReactNode, 'React.ReactPortal'>
  readonly htmlFor: string
  readonly required?: boolean
}
