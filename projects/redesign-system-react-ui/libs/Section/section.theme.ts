import { isFunction } from 'c-ufunc/libs/isFunction'

import { SectionInterface } from './section.types'

export function sectionTheme(props: SectionInterface): Record<string, any> {
  const {
    theme: { Section },
  } = props

  return {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    ...(isFunction(Section) ? Section(props)?.default : Section?.default),
  }
}
