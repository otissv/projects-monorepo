import React, { useMemo, useState } from 'react'
import { createTheme, ThemeInterface } from '@redesign-system/theme/libs'
import { GlobalStyles } from '../GlobalStyles'

import { ThemeProviderInterface } from './themeProvider.types'
import { ThemeContext } from '../ThemeContext/ThemeContext'

export function ThemeProvider({
  children,
  theme: hostTheme,
  isBuilt,
}: ThemeProviderInterface): JSX.Element {
  const theme = isBuilt ? hostTheme : (createTheme(hostTheme) as ThemeInterface)

  const [themeContext, setTheme] = useState(theme as ThemeInterface)

  const context = useMemo(
    () => ({ theme: themeContext, setTheme }),
    [themeContext, setTheme]
  )

  return (
    <ThemeContext.Provider value={context}>
      <GlobalStyles theme={themeContext} />
      {children}
    </ThemeContext.Provider>
  )
}
