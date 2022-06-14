import merge from 'deepmerge'
import {
  ScrollbarInterface,
  PartialScrollbarInterface,
} from './scrollbar.types'
import { PartialThemeInterface } from '../theme'
import { maybe } from 'ufunc/maybe'

export function scrollbarTheme<
  P extends PartialThemeInterface,
  T extends PartialScrollbarInterface
>(theme?: P): T {
  const maybeTheme = maybe({})
  const color: any = maybeTheme(theme?.color)
  const scrollbar: any = maybeTheme(theme?.scrollbar)
  const unit: any = maybeTheme(theme?.unit)

  const defaults: ScrollbarInterface = {
    width: unit[3],

    height: unit[3],
    backgroundColor: color.background,

    corner: {
      backgroundColor: color.background,
    },
    thumb: {
      backgroundColor: '#7d7d7d94',
      outline: 'transparent',
      transition: 'background-color ease 0.2s',
      hover: {
        backgroundColor: '#7d7d7d',
      },
    },
  }

  return merge(defaults, scrollbar) as T
}
