/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'

import { ThemeProvider } from '@redesign-system/react/libs'

import { Json } from './Json'

export default {
  title: 'Components/Json',
  component: Json,
}

const data = [...new Array(100)].map((_, i) => ({
  id: `id_${i}`,
  name: `Project ${i}`,
  endpoint: `http://project${i}.com`,
  ip: `0.0.0.${i}`,
  repo: `repo${i}`,
  port: `${i}000`,
}))

export const Default = () => (
  <ThemeProvider>
    <Json data={data} />
  </ThemeProvider>
)
