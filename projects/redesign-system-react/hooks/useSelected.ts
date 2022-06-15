/* eslint-disable functional/no-expression-statement */
import React from 'react'

const SELECTED_ADD = 'SELECTED_ADD'
const SELECTED_REMOVE = 'SELECTED_REMOVE'
const SELECTED_REMOVE_ALL = 'SELECTED_REMOVE_ALL'
const SELECTED_RESET = 'SELECTED_RESET'
const SELECTED_ADD_MANY = 'SELECTED_ADD_MANY'

export interface SelectedAddAction {
  readonly type: typeof SELECTED_ADD
  readonly id: string
}

export interface SelectedAddManyAction {
  readonly type: typeof SELECTED_ADD_MANY
  readonly ids: readonly string[]
}

export interface SelectedRemoveAction {
  readonly type: typeof SELECTED_REMOVE
  readonly id: string
}

export interface SelectedRemoveAllAction {
  readonly type: typeof SELECTED_REMOVE_ALL
}

export interface SelectedResetAction {
  readonly type: typeof SELECTED_RESET
}

export type SelectedActions =
  | SelectedAddAction
  | SelectedAddManyAction
  | SelectedRemoveAction
  | SelectedRemoveAllAction
  | SelectedResetAction

export interface SelectedInterface {
  readonly [key: string]: boolean
}

export interface SelectedDataInterface {
  readonly id: string
  readonly [key: string]: any
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useSelected(initialState: SelectedInterface = {}) {
  function reducer(
    state: { readonly [key: string]: any },
    action: SelectedActions
  ) {
    switch (action.type) {
      case SELECTED_ADD:
        return {
          ...state,
          [action.id]: true,
        }

      case SELECTED_ADD_MANY:
        return {
          ...state,
          ...action.ids.reduce(
            (acc, id: string) => ({
              ...acc,
              [id]: true,
            }),
            {}
          ),
        }

      case SELECTED_REMOVE: {
        const clonedState = { ...state }
        // eslint-disable-next-line functional/immutable-data
        delete clonedState[action.id]

        return clonedState
      }
      case SELECTED_REMOVE_ALL:
        return {}

      case SELECTED_RESET:
        return initialState
      default:
        return state
    }
  }
  const [state, dispatch] = React.useReducer(reducer, initialState)

  function checked(id: string) {
    return state[id] || null
  }

  /*
   * Methods
   */
  const add = React.useCallback(
    function add(id: string) {
      dispatch({
        type: SELECTED_ADD,
        id,
      })
    },
    [dispatch]
  )

  const addMany = React.useCallback(
    function addMany(ids: readonly string[]) {
      dispatch({
        type: SELECTED_ADD_MANY,
        ids,
      })
    },
    [dispatch]
  )

  const remove = React.useCallback(
    function remove(id: string) {
      dispatch({
        type: SELECTED_REMOVE,
        id,
      })
    },
    [dispatch]
  )

  const removeAll = React.useCallback(
    function removeAll() {
      dispatch({
        type: SELECTED_REMOVE_ALL,
      })
    },
    [dispatch]
  )

  const reset = React.useCallback(
    function removeAll() {
      dispatch({
        type: SELECTED_RESET,
      })
    },
    [dispatch]
  )

  /*
   * Events
   */
  const onClick = React.useCallback(
    function onClick(e: any) {
      e.preventDefault && e.preventDefault()

      return (action: SelectedActions) => dispatch(action)
    },
    [dispatch]
  )

  const onChecked = React.useCallback(
    function onChecked(e: any) {
      const id = e.target.id

      e.target.checked
        ? dispatch({
            type: SELECTED_ADD,
            id,
          })
        : dispatch({
            type: SELECTED_REMOVE,
            id,
          })
    },
    [dispatch]
  )

  const onToggleClick = React.useCallback(
    function onToggle(e: any) {
      e.preventDefault && e.preventDefault()
      const id = e.target.id

      return state[id]
        ? dispatch({
            type: SELECTED_REMOVE,
            id,
          })
        : dispatch({
            type: SELECTED_ADD,
            id,
          })
    },
    [dispatch, state]
  )

  function onCheckAllChange(data: readonly SelectedDataInterface[] = []) {
    return (e: any) => {
      // eslint-disable-next-line functional/no-conditional-statement
      if (data && e.target.checked) {
        // eslint-disable-next-line functional/prefer-readonly-type
        const selected: string[] = []

        // eslint-disable-next-line functional/no-loop-statement
        for (const item of data) {
          selected.push(item.id)
        }

        addMany(selected)
        // eslint-disable-next-line functional/no-conditional-statement
      } else {
        removeAll()
      }
    }
  }

  function onCheckAllClick(data: readonly SelectedDataInterface[] = []) {
    return (e: any) => {
      // eslint-disable-next-line functional/no-conditional-statement
      if (data && e.target.checked) {
        // eslint-disable-next-line functional/prefer-readonly-type
        const selected: string[] = []

        // eslint-disable-next-line functional/no-loop-statement
        for (const item of data) {
          selected.push(item.id)
        }

        addMany(selected)
        // eslint-disable-next-line functional/no-conditional-statement
      } else {
        removeAll()
      }
    }
  }

  return {
    state,
    checked,

    // methods
    add,
    addMany,
    dispatch,
    remove,
    removeAll,
    reset,

    // events
    onCheckAllChange,
    onCheckAllClick,
    onChecked,
    onClick,
    onToggleClick,
  }
}
