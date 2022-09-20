import { Response, Request } from 'express'
import { resData, resError } from '../utils/response'

import { getlistMatchingRefs } from './getlistMatchingRefs'

export const getlistMatchingRefsHadnler = (req: Request, res: Response) =>
  getlistMatchingRefs(req).then(resData(res)).catch(resError(res))
