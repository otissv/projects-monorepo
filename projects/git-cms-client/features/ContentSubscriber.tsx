import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

import { Subscriber } from '../components/Subscriber'
import { Content } from '../components/Content'
import { useStore } from 'store-subscriptions/build/libs/react/StoreContext'
import { Store, publish } from 'store-subscriptions'

export const ContentSubscriber = ({ initailState }) => {
  const router = useRouter()
  const store = useStore().current

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    const fileName = query.get('fileName') || ''

    debugger
    publish(store, {
      type: 'fileName',
      actions: [
        () => ({
          fileName,
        }),
      ],
    })

    // if (query.has('filename') && !filenameRef.current) {
    //   router.replace(router.pathname, {
    //     query: { folder: query.get('folder'), fileName },
    //   })
    //   // setStore(
    //   //   () =>
    //   //     ({
    //   //       folder,
    //   //       fileName: file,
    //   //     } as any)
    //   // )
    // }
  })

  console.log(store.state)

  return (
    <Subscriber props={['fileName', 'folder']} initailState={initailState}>
      <Content
        fileName={initailState.fileName}
        content={initailState.content}
      />
    </Subscriber>
  )
}
