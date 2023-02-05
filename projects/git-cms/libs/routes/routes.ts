/* eslint-disable functional/no-expression-statement */

import { Request, Response } from 'express'

import { getFileContentHadnler } from '../getFileContent'
// import { getFileInfoHadnler } from '../getFileInfo'
import { getFileListHadnler } from '../getFileList'
// import { getlistMatchingRefsHadnler } from '../getlistMatchingRefs'
// import { getRepoHadnler } from '../getRepo'
// import { getRepoListCommitsHadnler } from '../getRepoListCommits'
// import { gitSettingsHadnler } from '../getSettings'
// import { postCreateBranchHadnler } from '../postCreateBranch'
// import { postSaveFileContentHadnler } from '../postSaveFileContent'

export const routes = async (router: any) => {
  // eslint-disable-next-line functional/no-return-void
  router.get('/', (_req: Request, res: Response) => {
    res.json({ success: 'ok' })
    return
  })
  router.get('/getFileContent', getFileContentHadnler)
  // router.get('/getFileInfo', getFileInfoHadnler)
  router.get('/getFileList', getFileListHadnler)
  // router.get('/getRepo', getRepoHadnler)
  // router.get('/getRepoListCommits', getRepoListCommitsHadnler)
  // router.get('/getSettings', gitSettingsHadnler)
  // router.get('/getlistMatchingRefs', getlistMatchingRefsHadnler)
  // router.post('/postCreateBranch', postCreateBranchHadnler)
  // router.post('/postSaveFileContent', postSaveFileContentHadnler)

  //mocks
}
