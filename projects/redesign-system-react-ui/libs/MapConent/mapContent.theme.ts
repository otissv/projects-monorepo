import { isFunction } from 'c-ufunc/isFunction'

import {
  MapContentInterface,
  MapContentInnerInterface,
} from './mapContent.types'

export function mapContentTheme(
  props: MapContentInterface
): Record<string, any> {
  const {
    theme: { breakpoints, MapContent },
  } = props

  return {
    display: 'flex',
    flexWrap: 'warp',
    flexDirection: 'column',
    position: 'relative',
    [` @media only screen and (min-width: ${breakpoints.md}px)`]: {
      flexDirection: 'row',
    },

    ...(isFunction(MapContent)
      ? MapContent(props)?.appearance
      : MapContent?.appearance),
  }
}

export function mapContentInnerTheme(
  props: MapContentInnerInterface
): Record<string, any> {
  const {
    theme: { unit, MapContentInner },
  } = props

  return {
    display: 'flex',
    flex: 1,
    padding: unit[7],
    justifyContent: 'center',
    justifyItems: 'center',
    alignContent: 'center',
    alignItem: 'center',
    position: 'relative',

    ...(isFunction(MapContentInner)
      ? MapContentInner(props)?.appearance
      : MapContentInner?.appearance),
  }
}
