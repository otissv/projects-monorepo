import { isFunction } from 'c-ufunc/libs/isFunction'

import {
  AccordionInterface,
  AccordionItemInterface,
  AccordionContentInterface,
  AccordionButtonInterface,
} from './accordion.types'

export function accordionTheme(props: AccordionInterface): Record<string, any> {
  const {
    theme: { Accordion },
  } = props

  return {
    ...(isFunction(Accordion) ? Accordion(props)?.default : Accordion?.default),
  }
}

export function accordionItemTheme(
  props: AccordionItemInterface
): Record<string, any> {
  const {
    theme: { AccordionItem },
  } = props

  return {
    display: 'flex',
    flexDirection: 'column',
    ...(isFunction(AccordionItem)
      ? AccordionItem(props)?.default
      : AccordionItem?.default),
  }
}

export function accordionButtonTheme(
  props: AccordionButtonInterface
): Record<string, any> {
  const {
    theme: { AccordionButton },
  } = props

  return {
    width: '100%',
    ...(isFunction(AccordionButton)
      ? AccordionButton(props)?.default
      : AccordionButton?.default),
  }
}

export function accordionContentTheme(
  props: AccordionContentInterface
): Record<string, any> {
  const {
    theme: { AccordionContent },
  } = props

  return {
    ...(isFunction(AccordionContent)
      ? AccordionContent(props)?.default
      : AccordionContent?.default),
  }
}
