import { FC, useLayoutEffect, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { PortalInterface } from './portal.types'

export const Portal: FC<PortalInterface> = function Portal({
  children,
  selector = 'body',
}) {
  /* eslint-disable functional/no-expression-statement */

  const rootRef = useRef<any>()
  const elementRef = useRef<any>()

  useEffect(() => {
    /* eslint-disable functional/immutable-data */
    elementRef.current = document.createElement('div')
    rootRef.current = document.getElementById(selector)
  }, [selector])

  useLayoutEffect(() => {
    rootRef.current && rootRef.current.appendChild(elementRef.current)
  }, [rootRef, elementRef])

  return rootRef.current ? createPortal(children as any, rootRef.current) : null
}
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
Portal.displayName = 'Portal'
