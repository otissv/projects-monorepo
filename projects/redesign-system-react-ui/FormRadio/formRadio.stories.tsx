/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'

import { ThemeProvider } from '@redesign-system/react'
import { FormRadio } from './FormRadio'
import { Box } from '../Box'

export default {
  title: 'Components/FormRadio',
  component: FormRadio,
}

export const Default = () => {
  const [orange, setOrange] = React.useState<boolean>()
  const [apple, setApple] = React.useState<boolean>()
  const [pear, setPear] = React.useState<boolean>()

  function onChange(e: any) {
    /* eslint-disable functional/no-conditional-statement, functional/no-expression-statement */
    const checked = e.target.checked

    switch (e.target.id) {
      case 'orange':
        setOrange(checked)
        break

      case 'apple':
        setApple(checked)
        break

      case 'pear':
        setPear(checked)
        break
    }
  }

  return (
    <ThemeProvider>
      <Box m="default">
        <FormRadio
          name="fruits"
          id="orange"
          marginLeft={4}
          widths={4}
          onChange={onChange}
          checked={orange}
          label="Orange"
        />
        <FormRadio
          name="fruits"
          id="apple"
          marginLeft={4}
          widths={4}
          onChange={onChange}
          checked={apple}
          label="Apple"
        />
        <FormRadio
          name="fruits"
          id="pear"
          marginLeft={4}
          widths={4}
          onChange={onChange}
          checked={pear}
          label="pears"
        />
      </Box>
    </ThemeProvider>
  )
}

export const ErrorMessage = () => {
  const [checked, setChecked] = React.useState<boolean>()
  const [errorMessage, setErrorMessage] = React.useState('')

  function onChange(e: any) {
    setChecked(e.target.value)
  }

  const control = {
    onBlur(e: any) {
      const invalid = !e.target.checked

      if (invalid) {
        setErrorMessage('User name is required')
      } else {
        setErrorMessage('')
      }
    },
  }

  return (
    <ThemeProvider>
      <Box m="default">
        <FormRadio
          id="withError"
          marginLeft={4}
          widths={4}
          onChange={onChange}
          control={control}
          checked={checked}
          label="UserName"
          required
          name="default"
          errorMessage={errorMessage}
        />
      </Box>
    </ThemeProvider>
  )
}
