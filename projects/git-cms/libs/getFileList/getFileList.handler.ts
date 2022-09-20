import { Response, Request } from 'express'

import { resData, resError } from '../utils/response'

import { getFileList } from './getFileList'

export const getFileListHadnler = (req: Request, res: Response) =>
  getFileList(req).then(resData(res)).catch(resError(res))
