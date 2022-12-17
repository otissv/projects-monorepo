import { Store } from '../../..'
import React from 'react'

export type Notify = {
  notify:
    | {
        id: string | number
        message: string
        duration: number
      }[]
    | []
}

export const NotificationContenxt = React.createContext({
  current: new Store<Notify>({ notify: [] }),
})

export function useNotitications() {
  return React.useContext(NotificationContenxt)
}

export function NotificationProiver({
  children,
  notifications,
}: {
  children: React.ReactNode
  notifications: Store<Notify>
}) {
  const value = React.useRef(notifications)

  return (
    <NotificationContenxt.Provider value={value}>
      {children}
    </NotificationContenxt.Provider>
  )
}
