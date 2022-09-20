import { Response, Request } from 'express'
import { resData, resError } from '../utils/response'

import { gitSettings } from './gitSettings'

export const gitSettingsHadnler = (req: Request, res: Response) =>
  gitSettings(req).then(resData(res)).catch(resError(res))
