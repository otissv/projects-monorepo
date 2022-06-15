import React, { FC } from 'react'
import { useTimeRemaining } from '@redesign-system/react/libs'

import { TimerInterface } from './timer.types'

export const Timer: FC<TimerInterface> = function Countdown({
  endTime,
  countdown,
}) {
  const { days, hours, minutes, seconds, expired } = useTimeRemaining({
    endTime,
    countdown,
  })

  return expired ? (
    <React.Fragment> Expired </React.Fragment>
  ) : (
    <React.Fragment>
      {days} {days === 1 ? 'day' : 'days'} {hours}{' '}
      {hours === 1 ? 'hour' : 'hours'} {minutes}{' '}
      {minutes === 1 ? 'minute' : 'minutes'} {seconds}{' '}
      {seconds === 1 ? 'second' : 'seconds'}
    </React.Fragment>
  )
}
// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
Timer.displayName = 'Timer'
