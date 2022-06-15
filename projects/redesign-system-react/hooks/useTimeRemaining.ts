import React from 'react'

export function useTimeRemaining({
  endTime,
  countdown,
}: {
  readonly endTime: string
  readonly countdown?: boolean
}):
  | {
      readonly expired: boolean
      readonly days?: undefined
      readonly hours?: undefined
      readonly minutes?: undefined
      readonly seconds?: undefined
    }
  | {
      readonly days: number
      readonly hours: number
      readonly minutes: number
      readonly seconds: number
      readonly expired?: undefined
    } {
  const countDownDate = new Date(endTime || new Date().toISOString()).getTime()

  const calculateTimeLeft = () => {
    // Get today's date and time
    const now = new Date().getTime()

    // Find the distance between now and the count down date
    const distance = countDownDate - now

    if (distance < 0) {
      return { expired: true }
    } else {
      // Time calculations for days, hours, minutes and seconds
      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      }
    }
  }

  const [state, setState] = React.useState(calculateTimeLeft())

  // eslint-disable-next-line functional/no-expression-statement
  React.useEffect(() => {
    if (!countdown) return

    // eslint-disable-next-line functional/no-expression-statement
    setTimeout(() => {
      // eslint-disable-next-line functional/no-expression-statement
      setState(calculateTimeLeft())
    }, 1000)
  })

  return state
}
