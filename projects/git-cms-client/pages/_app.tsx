import React, { Fragment } from 'react'
import { ThemeProvider } from '@redesign-system/react'

import '../styles/variables.css'
import '../styles/global.css'
import { theme } from '../styles/theme'

export default function App({ Component, pageProps }: any) {
  return (
    <Fragment>
      {Component.auth ? (
        <ThemeProvider theme={theme} isBuilt={true}>
          <Component {...pageProps} />
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme} isBuilt={true}>
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </Fragment>
  )
}
