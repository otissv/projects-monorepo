import { Response, Request } from 'express'
import { resData, resError } from '../utils/response'

import { getFileContent } from './getFileContent'

export const getFileContentHadnler = (req: Request, res: Response) =>
  getFileContent(req).then(resData(res)).catch(resError(res))
