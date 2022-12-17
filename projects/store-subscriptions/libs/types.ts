export type EventType = string

export type EventAction<State> = (state: State) => State

export type Event<State> = {
  readonly type: EventType
  readonly actions: EventAction<State> | readonly EventAction<State>[]
}
