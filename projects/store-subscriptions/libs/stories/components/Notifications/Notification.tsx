import React from 'react'

import { useSubscribe } from '../../../react/hooks'
import { useNotitications, Notify } from '../Notifications/NotificationContenxt'

export function Notifications() {
  const [notifcations, setNotifcations] = useSubscribe(
    useNotitications(),
    'notify'
  ).value<Notify['notify'], Notify>()
  console.log(notifcations)

  function handleOnAddClick() {
    setNotifcations((state) => ({
      notify: [
        ...state.notify,
        {
          id: notifcations.length,
          message: `Item ${notifcations.length}`,
          duration: 2000,
        },
      ],
    }))
  }

  return (
    <div>
      <button onClick={handleOnAddClick}>Add Notification</button>
    </div>
  )
}
