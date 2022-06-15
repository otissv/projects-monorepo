/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'

import { ThemeProvider } from '@redesign-system/react'
import { Caption } from './Caption'

export default {
  title: 'Components/Caption',
  component: Caption,
}

export const Default = () => (
  <ThemeProvider>
    <Caption>Caption</Caption>
  </ThemeProvider>
)
