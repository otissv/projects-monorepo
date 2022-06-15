import React from 'react'

import { injectGlobal } from '@emotion/css'
import { GlobalStylesInterface } from '@redesign-system/theme'
import { createStyleString } from '../helpers/createStyleString'
import { normalizeTheme } from '@redesign-system/theme'

export function GlobalStyles({ theme, css }: GlobalStylesInterface): null {
  const normalize = React.useCallback(normalizeTheme, [])
  const global = theme?.global || {}

  // eslint-disable-next-line functional/no-expression-statement
  injectGlobal(normalize(), global, createStyleString(css))
  return null
}
