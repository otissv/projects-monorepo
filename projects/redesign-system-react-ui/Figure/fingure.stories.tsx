/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { ThemeProvider } from '@redesign-system/react'

import { Figure } from './Figure'

export default {
  title: 'Components/Figure',
  component: Figure,
}

export const Default = () => {
  return (
    <ThemeProvider>
      <Figure caption="this is  a caption"></Figure>
    </ThemeProvider>
  )
}
