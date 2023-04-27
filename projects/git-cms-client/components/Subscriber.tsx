import React from 'react'
import { useEffect } from 'react'
import { useSubscribe } from 'store-subscriptions/build/libs/react/hooks'
import { useStore } from 'store-subscriptions/build/libs/react/StoreContext'
import { toUpperFirst } from 'c-ufunc'
import useSWR from 'swr'

type SubcriberProp = {
  children: React.ReactElement
  initailState?: Record<string, any>
  props: string | string[]
  transforms?: (<State>(s: State) => State)[]
  url?: string
}

const propsToArray = (props: string | string[]) =>
  typeof props === 'string' ? [props] : props

const useSubscriberWithData = <State, Type>({
  initailState,
  props,
  transforms,
}: Omit<SubcriberProp, 'children' | 'url'>) => {
  const eventTypes = propsToArray(props)
  const subscriber = useSubscribe(useStore(), eventTypes)

  const state = transforms
    ? subscriber.transform<State, Type>(...transforms)
    : subscriber.value<State, Type>()

  useEffect(() => {
    eventTypes.forEach((eventType) => {
      return (
        initailState &&
        state[1]((_state: State) => ({ [eventType]: initailState[eventType] }))
      )
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return state
}

export const SubscriberWithoutData = <State, Type>({
  children,
  transforms,
  props,
  initailState,
}: Omit<SubcriberProp, 'url'>) => {
  const state = useSubscriberWithData({
    initailState,
    props,
    transforms,
  })

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          ...state[0],
          setStore: state[1],
        })
      })}
    </>
  )
}

export const Subscriber = <State, Type>({
  children,
  transforms,
  props,
  initailState,
  url,
}: SubcriberProp) => (
  <SubscriberWithoutData
    transforms={transforms}
    props={props}
    initailState={initailState}
  >
    {children}
  </SubscriberWithoutData>
)
