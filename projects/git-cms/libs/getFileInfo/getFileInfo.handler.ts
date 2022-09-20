import { Response, Request } from 'express'
import { resData, resError } from '../utils/response'

import { getFileInfo } from './getFileInfo'

export const getFileInfoHadnler = (req: Request, res: Response) =>
  getFileInfo(req).then(resData(res)).catch(resError(res))
