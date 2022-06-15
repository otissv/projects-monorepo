import React from 'react'

export function useDimensions({ breakPoints }: Record<string, any>): {
  readonly width: number
  readonly height: number
} {
  const [[width, height], setViewport] = React.useState([0, 0])

  const mq = React.useMemo(() => breakPoints, [breakPoints])

  React.useEffect(() => {
    function updateSize() {
      setViewport([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', updateSize)

    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [mq])

  return { width, height }
}
