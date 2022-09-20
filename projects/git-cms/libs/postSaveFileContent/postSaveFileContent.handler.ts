import { Response, Request } from 'express'
import { resData, resError } from '../utils/response'

import { postSaveFileContent } from './postSaveFileContent'

export const postSaveFileContentHadnler = (req: Request, res: Response) =>
  postSaveFileContent(req).then(resData(res)).catch(resError(res))
