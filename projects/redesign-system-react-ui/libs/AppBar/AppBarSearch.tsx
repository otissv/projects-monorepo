import React, { FC } from 'react'
import { Base, useTheme } from '@redesign-system/react/libs'

import { AppBarSearchInterface } from './appBar.types'
import { Textbox } from '../Textbox'
import { appBarSearchTheme } from './appBar.theme'

export const AppBarSearch: FC<AppBarSearchInterface> = function AppBarSearch({
  as = 'div',
  className = '',
  css = '',
  placeholder = 'Search',
  onSearch,
  textbox,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `AppBarSearch ${className}`
  const cssList = [appBarSearchTheme, css]

  function handleOnChange(e: any) {
    const value = e.target.value
    // eslint-disable-next-line functional/no-expression-statement
    onSearch && onSearch(e, { value })
  }

  return (
    <Base
      as={as}
      theme={theme}
      css={cssList}
      className={classNames}
      {...propsRest}
    >
      <Textbox
        id="appBar-search"
        label="search"
        placeholder={placeholder}
        {...textbox}
        onChange={handleOnChange}
      />
    </Base>
  )
}

// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
AppBarSearch.displayName = 'AppBarSearch'
