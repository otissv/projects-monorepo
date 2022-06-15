import { ThemeComponentInterface } from '@redesign-system/theme'

export interface PaginationInterface extends ThemeComponentInterface {
  readonly currentPage: number
  readonly pageSize?: readonly number[]
  readonly size: number
  readonly total: number
  readonly onNext: any
  readonly onPrevious: any
  readonly onToStart: any
  readonly onToEnd: any
  readonly onPageClick: any
}
