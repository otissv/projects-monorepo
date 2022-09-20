import { Request } from 'express'
import { rejectError } from 'c-ufunc'

import { getRepoService } from './getRepo.service'
import { input } from '../utils'

export const getRepo = (req: Request) =>
  input({ ...req.body, octokit: (req as any).context.octokit })
    .then(getRepoService as any)
    .catch(rejectError)
