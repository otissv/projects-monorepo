/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'

import { ThemeProvider } from '@redesign-system/react'

import { Legend } from './Legend'

export default {
  title: 'Components/Legend',
  component: Legend,
}

export const Default = () => (
  <ThemeProvider>
    <Legend>Legend details</Legend>
  </ThemeProvider>
)
