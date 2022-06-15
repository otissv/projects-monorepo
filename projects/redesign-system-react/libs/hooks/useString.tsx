/* eslint-disable functional/no-expression-statement */

import React from 'react'

export function useString(initialState = ''): {
  /* eslint-disable functional/no-return-void */

  readonly string: string
  readonly onClick: (e: any) => void
  readonly onChange: (e: any) => void
} {
  const [string, setString] = React.useState(initialState)

  function onClick(e: any) {
    e.preventDefault()
    const id = e.currentTarget.id
    setString(id)
  }

  function onChange(e: any) {
    const value = e.target.value
    setString(value)
  }

  return {
    string,
    onClick,
    onChange,
  }
}
