import { Request } from 'express'

import { getFileContentService } from './getFileContent.service'

export async function getFileContent(req: Request) {
  const { octokit } = (req as any).context
  const { owner, repo, path, branch } = req.body || {}

  return getFileContentService({
    octokit,
    owner,
    repo,
    path,
    branch,
  }).catch((error: Error) => Promise.reject(error))
}
