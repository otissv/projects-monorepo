import React from 'react'

import { Subscriber } from '../components/Subscriber'
import { Listfolders } from '../components/ListFolders'

export const ListFolderSubscriber = ({ initailState }) => (
  <Subscriber props="folders" initailState={initailState}>
    <Listfolders folders={{}} setStore={() => {}} />
  </Subscriber>
)
