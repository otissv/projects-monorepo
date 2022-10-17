import { Request } from 'express'
import { rejectError } from 'c-ufunc'

// import { getSettingsService } from './getSettings.service'
import { input } from '../utils'

export const gitSettings = (req: Request) =>
  input({ ...req.body, octokit: (req as any).context.octokit })
    .then(console.log)
    // .then(getSettingsService as any)
    .catch(rejectError)
