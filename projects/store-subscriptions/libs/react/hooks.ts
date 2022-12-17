/* eslint-disable functional/no-expression-statement */
import React from 'react'
import { pipe } from 'c-ufunc/libs/pipe'

import { useStore } from './StoreContext'
import { Event, EventAction } from '../types'
import { Store } from '..'

export function publish<State>(
  store: Store<State>,
  ...events: readonly Event<State>[]
) {
  events.forEach(({ type, actions }) => {
    const fns = Array.isArray(actions) ? actions : [actions]

    const nextState = pipe(...fns)(store.state)

    store.publish([
      type,
      {
        [type.split('.')[0]]: store.get(type.split('.')[0], nextState),
      },
    ])
  })
}

export function useBroadcast<State>(...actions: readonly EventAction<State>[]) {
  const store = useStore().current

  const nextState = pipe<Partial<State>>(...actions)(store.state)
  store.broadcast(nextState)
}

export function useFetchEffect(
  {
    url,
    ...options
  }: { readonly url: RequestInfo | URL; readonly options?: RequestInit },
  cb: (c: () => Promise<any>) => any
) {
  React.useEffect(() => {
    cb
    fetch(url, options as RequestInit)
      .then((res) => res.json())
      .then((data) => cb(() => Promise.resolve(data)))
      .catch((error) => Promise.reject(error))
  }, [])
}

export function usePublish<State>(...events: readonly Event<State>[]) {
  const store = useStore().current
  return publish(store, ...(events as any))
}

export function useSubscribe<State>(
  storeRef: {
    readonly current: Store<State>
  },
  eventType: string
) {
  const store = storeRef.current

  const [forceUpdate, setForceUpdate] = React.useState(false)

  React.useEffect(() => {
    // Add event listener
    const updateState = () => setForceUpdate(!forceUpdate)
    store.on(eventType, updateState)

    return () => {
      // remove event listeners.
      // stop multiple listers from being created.
      store.listeners(eventType).forEach(() => {
        store.removeListener(eventType, updateState)
      })
    }
  }, [store, eventType, forceUpdate, setForceUpdate])

  function dispatch(...actions: readonly EventAction<State>[]) {
    publish(store, {
      type: eventType,
      actions,
    })
  }

  const state = [store.get(eventType), dispatch]

  // eslint-disable-next-line functional/no-return-void
  type Dispatch<State> = (...actions: readonly EventAction<State>[]) => void

  return {
    transform: <State, T>(...actions: readonly EventAction<T>[]) => ({
      value: () =>
        [
          actions.reduce(
            //TODO: fix type of previousValue
            (previousValue, fn) => (fn as any)(previousValue),
            state[0] as State
          ),
          dispatch,
        ] as unknown as readonly [State, Dispatch<State>],
    }),
    //TODO: fix State type for Dispatch
    value: <StateProp, State>() =>
      state as unknown as readonly [StateProp, Dispatch<State>],
  }
}