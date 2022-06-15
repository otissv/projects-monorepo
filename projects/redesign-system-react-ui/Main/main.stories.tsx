/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'

import { ThemeProvider } from '@redesign-system/react'
import { Main } from './Main'

export default {
  title: 'Components/Main',
  component: Main,
}

export const Default = () => (
  <ThemeProvider>
    <Main>Main</Main>
  </ThemeProvider>
)
