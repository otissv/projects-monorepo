import { createContext, useContext } from 'react'

import { ThemeContextInterface } from './themeContext.types'
import { themeDefaults } from '@redesign-system/theme'

const initialState: ThemeContextInterface = {
  theme: themeDefaults,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
}

export const ThemeContext = createContext(initialState)

export function useTheme(): ThemeContextInterface {
  return useContext(ThemeContext)
}
