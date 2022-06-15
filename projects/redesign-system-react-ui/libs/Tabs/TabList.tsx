/* eslint-disable functional/no-expression-statement */
import React, { FC, useCallback } from 'react'

import { ButtonGroup } from '../ButtonGroup'
import { tabsListTheme } from './tabs.theme'
import { TabsListInterface } from './tabs.types'
import { useTheme } from '@redesign-system/react/libs'

export const TabList: FC<TabsListInterface> = function TabList({
  as = 'div',
  children,
  className = '',
  css,
  ...propsRest
}) {
  const { theme } = useTheme()
  const classNames = `TabList ${className}`
  const cssList = [tabsListTheme, css, 'overflow:hidden;']

  const handleOnWheel = useCallback(function handleOnWheel(e: any) {
    /* eslint-disable functional/no-expression-statement */
    e.preventDefault()

    const tabList = e.currentTarget
    //TODO: not working
    // eslint-disable-next-line functional/immutable-data
    tabList.scrollLeft = -e.nativeEvent.wheelDelta || -e.nativeEvent.detail
  }, [])

  return (
    <ButtonGroup
      as={as}
      className={classNames}
      onWheel={handleOnWheel}
      theme={theme}
      css={cssList}
      {...propsRest}
    >
      {children}
    </ButtonGroup>
  )
}

// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
TabList.displayName = 'TabList'