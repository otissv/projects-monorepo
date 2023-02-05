/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-loop-statement */

import fetch from 'node-fetch'
import { rejectError } from 'c-ufunc'
import { config } from '../config'
import { getFileListMock } from './getFileList.mock'

export const getFileListService = ({
  branch,
  owner,
  repo,
  settings,
}: {
  readonly branch: string
  readonly owner: string
  readonly repo: string
  readonly settings: any
}) =>
  config().isMock
    ? getFileListMock
    : fetch(
        `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`
      )
        .then((res: any) => res.text())
        // eslint-disable-next-line functional/no-return-void
        .then((text: string) => {
          const { tree } = JSON.parse(text)
          const folders = settings.content[0].folders

          const files: any = []

          for (const { type, path, url, sha } of tree) {
            for (const folder of folders) {
              // eslint-disable-next-line functional/no-conditional-statement
              if (type === 'blob' && folder === path.substr(0, folder.length)) {
                // eslint-disable-next-line functional/immutable-data
                files.push({
                  path,
                  url,
                  sha,
                })
              }
            }
          }
          return files
        })
        .catch(rejectError)
