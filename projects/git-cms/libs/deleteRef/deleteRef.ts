import { Request } from 'express'

import { deleteRefService } from './deleteRef.service'
import { input } from '../utils'

export const deleteRef = (req: Request) =>
  input({ ...req.body, octokit: (req as any).context.octokit })
    .then(deleteRefService)
    .catch((error: Error) => Promise.reject(error))
