import { Request } from 'express'

import { deleteFileService } from './deleteFile.service'
import { getFileContentService } from '../getFileContent'
import { input, mergeFnResult } from '../utils'

export const deleteFile = (req: Request) =>
  input({ ...req.body, octokit: (req as any).context.octokit })
    .then(mergeFnResult(getFileContentService))
    .then(deleteFileService)
    .catch((error: Error) => Promise.reject(error))
