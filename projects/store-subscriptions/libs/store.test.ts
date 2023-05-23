import { createStore } from './store'

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

describe('store', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let store = null

  beforeEach(() => {
    store = createStore(initialState)
  })
  afterEach(() => {
    store = null
  })
  it('should be defined', () => {
    store = createStore(initialState)
    expect(store).toBeDefined()
  })

  // it('should get the state', () => {
  //   store = createStore(initialState)
  //   expect(store.state).toBe(initialState)
  //   expect(store.get('count')).toBe(0)
  // })

  it('should publish an event', () => {
    store = createStore(initialState)
    store.publish(['count', { count: 1 }])
    expect(store.get('count')).toBe(1)
  })

  it('should publish an event with multiple actions', () => {
    store = createStore(initialState)
    store.publish(['count', { count: 1 }])
    store.publish(['count', { count: 2 }])
    expect(store.get('count')).toBe(2)
  })
})
