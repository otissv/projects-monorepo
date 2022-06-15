import { isFunction } from 'c-ufunc/isFunction'

import { VideoInterface } from './video.types'

export function videoTheme(props: VideoInterface): Record<string, any> {
  const {
    theme: { Video },
  } = props

  return {
    ...(isFunction(Video) ? Video(props)?.default : Video?.default),
  }
}
