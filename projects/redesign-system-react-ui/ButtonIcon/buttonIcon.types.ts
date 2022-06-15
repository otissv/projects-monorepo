import { ButtonInterface } from '../Button'
import { IconInterface } from '../Icon'

export interface ButtonIconInterface extends ButtonInterface {
  readonly alt: string
  readonly dimension?: string
  readonly icon: (props: IconInterface) => React.ReactNode
  readonly iconProps?: IconInterface
  readonly title?: string
  readonly uid?: string
}
