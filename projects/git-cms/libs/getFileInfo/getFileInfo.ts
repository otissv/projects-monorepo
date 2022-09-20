import { Request } from 'express'
import { rejectError } from 'c-ufunc'

import { getFileInfoService } from './getFileInfo.service'

export async function getFileInfo(req: Request) {
  const { octokit } = (req as any).context
  const { owner, repo, path, branch } = req.body || {}

  return getFileInfoService({
    octokit,
    owner,
    repo,
    path,
    branch,
  }).catch(rejectError)
}
