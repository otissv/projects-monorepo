import React from 'react'

import { Store } from '../store'

export const StoreContext = React.createContext({
  current: new Store({}),
})

export function useStore() {
  return React.useContext(StoreContext)
}

export const StoreProvider = ({
  children,
  store,
}: {
  children: React.ReactNode
  store: Store<any>
}) => {
  const value = React.useRef(store)
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
