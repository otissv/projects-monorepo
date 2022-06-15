/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'

import { ThemeProvider } from '@redesign-system/react/libs'

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
