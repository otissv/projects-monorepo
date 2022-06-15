/* eslint-disable functional/no-expression-statement */

import React from 'react'

export function useOnScreen(
  elementRef: { readonly current: HTMLElement | null },
  dist = 0
): boolean | undefined {
  const element = elementRef.current
  const [onScreen, setOnScreen] = React.useState<boolean>()

  React.useEffect(() => {
    function checkVisible(element: HTMLElement, threshold = 0) {
      const rect = element.getBoundingClientRect()
      const viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
      )
      return !(rect.top - viewHeight + threshold >= 0)
    }

    window.addEventListener(
      'scroll',
      () => element && setOnScreen(checkVisible(element, dist))
    )
  }, [element, dist, setOnScreen])

  return onScreen
}
