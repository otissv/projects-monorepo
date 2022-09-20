import { Request } from 'express'
import { rejectError } from 'c-ufunc'

import { getFileListService } from '../getFileList'
import { getSettingsService } from '../getSettings'
import { input } from '../utils'

export const getFileList = (req: Request) =>
  input({ ...req.body, octokit: (req as any).context.octokit })
    .then(async (props) => ({
      ...props,
      settings: await getSettingsService(props as any),
    }))
    .then(getFileListService as any)
    .catch(rejectError)
