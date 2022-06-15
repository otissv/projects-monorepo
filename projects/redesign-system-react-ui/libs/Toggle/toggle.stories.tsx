/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { MenuIcon } from '@redesign-system/react-material-icons/MenuIcon'
import { MenuOpenIcon } from '@redesign-system/react-material-icons/MenuOpenIcon'
import { ThemeProvider } from '@redesign-system/react/libs'

import { Toggle } from './Toggle'

export default {
  title: 'Components/Toggle',
  component: Toggle,
}

export const Default = () => (
  <ThemeProvider>
    <Toggle id="1" label="default">
      <MenuOpenIcon />
      <MenuIcon />
    </Toggle>
  </ThemeProvider>
)
