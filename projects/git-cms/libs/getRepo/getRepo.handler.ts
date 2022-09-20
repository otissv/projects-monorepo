import { Response, Request } from 'express'
import { resData, resError } from '../utils/response'

import { getRepo } from './getRepo'

export const getRepoHadnler = (req: Request, res: Response) =>
  getRepo(req).then(resData(res)).catch(resError(res))
