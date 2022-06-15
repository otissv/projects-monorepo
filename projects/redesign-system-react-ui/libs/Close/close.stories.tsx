/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'

import { ThemeProvider } from '@redesign-system/react/libs'
import { Close } from './Close'

export default {
  title: 'Components/Close',
  component: Close,
}

export const Default = () => (
  <ThemeProvider>
    <Close />
  </ThemeProvider>
)
