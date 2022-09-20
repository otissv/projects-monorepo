import { Response, Request } from 'express'
import { resData, resError } from '../utils/response'

import { deleteFile } from './deleteFile'

export const deleteFileHadnler = (req: Request, res: Response) =>
  deleteFile(req).then(resData(res)).catch(resError(res))
