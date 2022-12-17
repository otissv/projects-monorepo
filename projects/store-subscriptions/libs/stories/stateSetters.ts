export type Count = number
export type Order = {
  readonly cup: {
    readonly size: string
    readonly madeOf: string
  }
  readonly milk?: {
    readonly type: string
    readonly amount: string
  } | null
  readonly shots: number
  readonly food: readonly number[]
}

export type User = {
  readonly id: number
  readonly name: string
  readonly username: string
  readonly email: string
  readonly address: {
    readonly street: string
    readonly suite: string
    readonly city: string
    readonly zipcode: string
    readonly geo: {
      readonly lat: string
      readonly lng: string
    }
  }
  readonly phone: string
  readonly website: string
  readonly company: {
    readonly name: string
    readonly catchPhrase: string
    readonly bs: string
  }
}

export type State = {
  readonly count: Count
  readonly order: Order
  readonly users: readonly User[]
}

export const updateOrderSetter = (update: Partial<Order>) => {
  return () => ({
    order: {
      ...update,
    },
  })
}

export const incrementSetter = (state: State) => ({
  ...state,
  count: state.count + 1,
})
export const decrementSetter = (state: State) => {
  const count = state.count <= 1 ? 0 : state.count - 1
  return { ...state, count }
}
export const addSetter = (n: number) => (state: State) => ({
  ...state,
  count: state.count + n,
})
export const add3Setter = (state: State) => addSetter(2)(incrementSetter(state))

export function insertState(list = []) {
  return (n = list.length) =>
    (update: Partial<Order>) => {
      if (n === 0) {
        return [update, ...list]
      } else if (n === list.length) {
        return [...list, update]
      } else {
        return [...list.slice(0, n), update, ...list.slice(n, list.length)]
      }
    }
}

export function updateState(list = []) {
  return (n = list.length) =>
    (update: Partial<Order>) => {
      if (n === 0) {
        return [update, ...list.slice(1, list.length)]
      } else if (n === list.length) {
        return [...list.slice(0, list.length - 1), update]
      } else {
        return [...list.slice(0, n), update, ...list.slice(n, list.length - 1)]
      }
    }
}
