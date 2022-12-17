import React from 'react'
import { useSubscribe } from '../../react/hooks'
import { useStore } from '../../react/StoreContext'

import {
  incrementSetter,
  decrementSetter,
  addSetter,
  add3Setter,
  State,
} from '../stateSetters'

export function Counter() {
  const [countA, setCountA] = useSubscribe(useStore(), 'count')
    .transform<State, number>(
      (s) => s + 15,
      (s) => s - 5
    )
    .value()
  const [countB, setCountB] = useSubscribe(useStore(), 'count').value<
    State['count'],
    State
  >()

  function onIncrementClick() {
    setCountA(incrementSetter)
  }

  function onDecrementClick() {
    setCountA(decrementSetter)
  }

  function onAdd2() {
    setCountB(addSetter(2))
  }

  function onAdd3() {
    setCountB(add3Setter)
  }

  function onAdd6() {
    setCountB(add3Setter, incrementSetter, addSetter(2))
  }

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={onDecrementClick}>-</button>
        <button onClick={onIncrementClick}>+</button>
        <button onClick={onAdd2}>add2</button>
        <button onClick={onAdd3}>add3</button>
        <button onClick={onAdd6}>add6</button>
        <br />
        <>Count A: {countA}</>
        <br />
        <> Count B: {countB}</>
        <br />
      </div>
    </div>
  )
}
