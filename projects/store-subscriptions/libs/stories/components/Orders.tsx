import React from 'react'

import { useSubscribe } from '../../react/hooks'
import { updateOrderSetter, State } from '../stateSetters'
import { useStore } from '../../react/StoreContext'

export function Orders() {
  const [order, setOrder] = useSubscribe(useStore(), 'order').value<
    State['order'],
    Partial<State>
  >()
  const setCup = useSubscribe(useStore(), 'order.cup').value()[1]

  function onUpdateOrder() {
    setOrder(
      updateOrderSetter({
        milk: null,
      }) as any
    )
  }

  function onUpdateCup() {
    setCup((_state) => ({
      //TODO: should not update cup
      count: 999,
      order: {
        cup: {
          size: 1,
        },
      },
    }))
  }
  return (
    <div>
      <h2>Orders</h2>

      <button onClick={onUpdateCup}>Update cup</button>
      <button onClick={onUpdateOrder}>Update Order</button>
      <pre>{JSON.stringify(order, null, 2)}</pre>
    </div>
  )
}
