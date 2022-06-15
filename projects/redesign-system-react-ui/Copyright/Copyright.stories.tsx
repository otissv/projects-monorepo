/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'

import { ThemeProvider } from '@redesign-system/react'
import { Copyright } from './Copyright'

export default {
  title: 'Components/Copyright',
  component: Copyright,
}

export const Default = () => (
  <ThemeProvider>
    <Copyright>Redesign</Copyright>
  </ThemeProvider>
)
