import { AppBarInterface } from '../AppBar'

export interface SelectToolbarInterface {
  readonly selected: number
  // eslint-disable-next-line functional/no-return-void
  readonly handleDeleteSelected: (e: any) => void
}

export type ToolbarInterface = AppBarInterface
