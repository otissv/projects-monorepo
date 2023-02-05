/* eslint-disable functional/no-return-void */
/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-this-expression */
/* eslint-disable functional/no-class */
import EventEmitter from 'events'
import { deepMerge } from 'c-ufunc/libs/exP/deepmerge'

import { EventType, Event } from './types'
import { pipe } from 'c-ufunc'

export class Store<State> extends EventEmitter {
  // eslint-disable-next-line functional/prefer-readonly-type
  state: State
  readonly initialState

  constructor(initialState: State) {
    super()
    this.state = initialState
    this.initialState = initialState
  }

  get<State>(eventType: string, state?: State) {
    // extract state
    return eventType
      .split('.')
      .reduce(
        (previousValue, current) => (previousValue as any)[current],
        state || this.state
      )
  }

  publish<State>([eventType, updateState]: readonly [
    EventType,
    Partial<State>
  ]) {
    //TODO: handle publishing multiple events
    //TODO: walk the event path and publish up the tree
    this.state = deepMerge(this.state as any)(updateState as any)

    //TODO: maybe see if state has changed before emitting
    this.emit(eventType as string, this.get(eventType as string))
  }

  // TODO: subscribe() {}

  broadcast(nextState: Partial<State>) {
    this.state = deepMerge(this.state as any)(nextState as any)
    this.eventNames().forEach((eventType) => {
      this.emit(eventType, this.get(eventType as string))
    })
  }
}

export const createStore = <State extends Record<string, any>>(
  initialState: State
) => {
  return new Store(initialState)
}

export function publish<State>(
  store: Store<State>,
  ...events: readonly Event<State>[]
) {
  events.forEach(({ type, actions }) => {
    const fns = Array.isArray(actions) ? actions : [actions]

    const newState = {
      ...store.state,
      ...(pipe(...fns)(store.state) as object),
    }

    store.publish([
      type,
      {
        [type.split('.')[0]]: store.get(type.split('.')[0], newState),
      },
    ])
  })
}
