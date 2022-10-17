import React from 'react'
import { Button } from 'ui'
import { argNames } from 'c-ufunc/libs/argNames'

export default function Web() {
  return (
    <div>
      git-cms
      <h1>{argNames((a: number, b: number) => a + b)}</h1>
      <Button />
    </div>
  )
}

export async function getServerSideProps(context) {
  const owner = 'otissv'
  const repo = 'otissv-test-repo'
  const branch = 'main'

  const res = await fetch(
    `http://localhost:5000/git-cms/getFileList?owner=${owner}&repo=${repo}&branch=${branch}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const result = await res.json()

  const filesList = result.data.reduce((acc: any, current) => {
    const [folder, files] = current.path.split('/')
    return {
      ...acc,
      [folder]: {
        ...acc[folder],
        files: [...(acc[folder] ? acc[folder].files : []), files],
      },
    }
  }, {})

  return {
    props: {
      filesList,
    }, // will be passed to the page component as props
  }
}
