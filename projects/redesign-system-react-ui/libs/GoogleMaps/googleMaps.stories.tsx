/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { ThemeProvider, useString } from '@redesign-system/react/libs'

import { GoogleMaps } from './GoogleMaps'
import { Textbox } from '../Textbox'

export default {
  title: 'Components/GoogleMaps',
  component: GoogleMaps,
}

export const Default = () => {
  const { string: location, onChange: onLocationClick } = useString('London')

  return (
    <ThemeProvider>
      <Textbox
        id="location"
        label="Search location"
        value={location}
        onChange={onLocationClick}
        mb={4}
      />
      <GoogleMaps location={location}></GoogleMaps>
    </ThemeProvider>
  )
}
