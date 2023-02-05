import React from 'react'

import { getFileList } from '../queries/getFileList'
import { ListFolderSubscriber } from '../features/ListFoldersSubscriber'
import { ContentSubscriber } from '../features/ContentSubscriber'
import { initialState } from '../store/initialState'

export default function Index({ folders }) {
  return (
    <>
      <ListFolderSubscriber initailState={{ ...initialState, folders }} />
      <ContentSubscriber initailState={initialState} />
    </>
  )
}

export async function getServerSideProps(context) {
  const folders = await getFileList()

  return {
    props: { folders }, // will be passed to the page component as props
  }
}
