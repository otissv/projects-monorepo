import { Request } from 'express'
import { rejectError } from 'c-ufunc'

import { getlistMatchingRefsService } from './getlistMatchingRefs.service'
import { input } from '../utils'

export const getlistMatchingRefs = (req: Request) =>
  input({ ...req.body, octokit: (req as any).context.octokit })
    .then(getlistMatchingRefsService as any)
    .catch(rejectError)
