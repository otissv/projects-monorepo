import React, { StrictMode } from 'react'

import { Users } from './components/Users'
import { Counter } from './components/Counter'
import { Orders } from './components/Orders'
import { Notifications } from './components/Notifications'

export default function App() {
  return (
    <StrictMode>
      <Notifications />
      <Counter />
      <Orders />
      <Users />
    </StrictMode>
  )
}
