import { Request } from 'express'
import { rejectError } from 'c-ufunc'

import { getRepoListCommitsService } from './getRepoListCommits.service'
import { input, mergeFnResult } from '../utils'
import { getRepoService } from '../getRepo'

export const getRepoListCommits = (req: Request) =>
  input({ ...req.body, octokit: (req as any).context.octokit })
    .then(mergeFnResult(getRepoService))
    .then((props: Record<string, any>) => ({
      ...props,
      sha: props.default_branch,
    }))
    .then(getRepoListCommitsService as any)
    .catch(rejectError)
