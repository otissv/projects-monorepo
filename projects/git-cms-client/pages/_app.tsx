import React from 'react'
import { ThemeProvider } from '@redesign-system/react'
import { StoreProvider } from 'store-subscriptions/build/libs/react/StoreContext'
import { createStore } from 'store-subscriptions'

import '../styles/variables.css'
import '../styles/global.css'
import { initialState } from '../store/initialState'
import { theme } from '../styles/theme'

const store = createStore(initialState)

export default function App({ Component, pageProps }: any) {
  return (
    <StoreProvider store={store}>
      {Component.auth ? (
        <ThemeProvider theme={theme} isBuilt={true}>
          <Component {...pageProps} />
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme} isBuilt={true}>
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </StoreProvider>
  )
}
