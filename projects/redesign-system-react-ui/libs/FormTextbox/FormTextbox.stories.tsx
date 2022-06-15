/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'

import { ThemeProvider } from '@redesign-system/react/libs'
import { FormTextbox } from './FormTextbox'
import { Box } from '../Box'

export default {
  title: 'Components/FormTextbox',
  component: FormTextbox,
}

export const Default = () => {
  const [value, setValue] = React.useState('')

  function onChange(e: any) {
    /* eslint-disable functional/no-expression-statement */
    setValue(e.target.value)
  }

  return (
    <ThemeProvider>
      <Box m="default">
        <FormTextbox
          id="default"
          marginLeft={4}
          widths={4}
          placeholder="Search"
          onChange={onChange}
          value={value}
          label="Search"
        />
      </Box>
    </ThemeProvider>
  )
}

export const ErrorMessage = () => {
  const [value, setValue] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')

  function onChange(e: any) {
    setValue(e.target.value)
  }

  const control = {
    onBlur(e: any) {
      /* eslint-disable functional/no-conditional-statement */
      const invalid = !e.target.value

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
        <FormTextbox
          id="withError"
          marginLeft={4}
          widths={4}
          onChange={onChange}
          control={control}
          value={value}
          label="UserName"
          required
          errorMessage={errorMessage}
        />
      </Box>
    </ThemeProvider>
  )
}
