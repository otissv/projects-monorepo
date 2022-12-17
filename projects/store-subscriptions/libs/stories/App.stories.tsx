/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'

export default {
  title: 'Core/Base',
  component: App,
}

import { createStore } from '../index'
import { StoreProvider } from '../react/StoreContext'
import { NotificationProiver } from './components/Notifications/NotificationContenxt'
import App from './App'

const initialState = {
  count: 0,
  order: {
    cup: {
      size: 'small', // medium large
      madeOf: 'styrofoam', // or you could be eating in and it be a proper cup
    },
    milk: {
      type: 'almond',
      amount: 'splash',
    },
    shots: 1,
    food: [0, 1, 2, 3, 4, 5],
  },
  users: [],
}
const store = createStore(initialState)
const notifications = createStore({
  notify: [],
})

export const Default = () => (
  <StoreProvider store={store}>
    <NotificationProiver notifications={notifications}>
      <App />
    </NotificationProiver>
  </StoreProvider>
)
