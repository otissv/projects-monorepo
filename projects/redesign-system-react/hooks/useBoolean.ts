/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statement */
import React from 'react'

export function useBoolean(
  initialState = false
): {
  readonly boolean: boolean
  readonly onClick: (e: any) => (boolean: boolean) => void
  readonly onToggleClick: (e: any) => void
  readonly setBoolean: React.Dispatch<React.SetStateAction<boolean>>
  readonly onChange: (e: any) => void
} {
  const [boolean, setBoolean] = React.useState(initialState)

  function onClick(e: any) {
    e.preventDefault && e.preventDefault()
    return (boolean: boolean) => setBoolean(boolean)
  }

  function onToggleClick(e: any) {
    e.preventDefault && e.preventDefault()
    setBoolean(!boolean)
  }

  function onChange(e: any) {
    const value = e.target.value
    setBoolean(value)
  }

  return {
    boolean,
    onClick,
    onToggleClick,
    setBoolean,
    onChange,
  }
}
