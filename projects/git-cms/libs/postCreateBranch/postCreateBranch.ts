import { Request } from 'express'
import cuid from 'cuid'
import { rejectError } from 'c-ufunc'

import { getRepoListCommitsService } from '../getRepoListCommits'
import { postCreateBranchService } from './postCreateBranch.service'
import { input, mergeFnResult } from '../utils'

export const postCreateBranch = (req: Request) =>
  input({
    ...req.body,
    octokit: (req as any).context.octokit,
    ref: `refs/heads/${cuid()}`,
  })
    .then(mergeFnResult(getRepoListCommitsService))
    .then(postCreateBranchService)
    .catch(rejectError)
