/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, { Fragment } from 'react'
import { theme, Box } from './story.components'
import { ThemeProvider } from '../../ThemeProvider'

export default {
  title: 'Theme/Color',
}

function getColorItems() {
  const items = []

  // eslint-disable-next-line functional/no-loop-statement
  for (const key in theme.color) {
    const value = theme.color[key]

    // eslint-disable-next-line functional/no-expression-statement
    items.push(
      <Fragment>
        <Box w="200px" m={4} childrenProps={{ mb: 2 }}>
          <Box>
            <Box as="p">{key}</Box>

            <Box as="p">{value}</Box>
          </Box>

          <Box w="100px" h="100px" bg={value} display="block" />
        </Box>
      </Fragment>
    )
  }

  return items
}

export const Color = () => {
  return (
    <ThemeProvider>
      <Box display="flex" flexWrap="wrap">
        {getColorItems()}
      </Box>
    </ThemeProvider>
  )
}
