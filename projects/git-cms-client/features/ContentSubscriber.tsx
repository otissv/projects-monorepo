import React from 'react'

import { Subscriber } from '../components/Subscriber'
import { Content } from '../components/Content'

export const ContentSubscriber = ({ initailState }) => (
  <Subscriber props={['fileName', 'folder']} initailState={initailState}>
    <Content fileName={initailState.fileName} content={initailState.content} />
  </Subscriber>
)
