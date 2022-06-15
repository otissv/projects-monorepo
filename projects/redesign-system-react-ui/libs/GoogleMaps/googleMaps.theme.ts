import { isFunction } from 'c-ufunc/isFunction'

import { GoogleMapsInterface } from './googleMaps.types'

export function googleMapsTheme(
  props: GoogleMapsInterface
): Record<string, any> {
  const {
    height,
    width,
    theme: { GoogleMaps },
  } = props
  return {
    position: 'relative',
    textAlign: 'right',
    height: width,
    width: height,

    '.gmap_canvas': {
      overflow: 'hidden',
      background: 'none !important',
      height: 'inherit',
      width: 'inherit',
    },

    ...(isFunction(GoogleMaps)
      ? GoogleMaps(props)?.default
      : GoogleMaps?.default),
  }
}
