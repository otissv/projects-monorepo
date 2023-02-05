import React from 'react'
import { useRouter } from 'next/router'

export default function Folders() {
  const router = useRouter()
  const { folder } = router.query

  return <div>{folder}</div>
}
