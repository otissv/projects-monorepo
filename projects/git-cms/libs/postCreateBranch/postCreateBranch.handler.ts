import { Response, Request } from 'express'

import { resData, resError } from '../utils/response'
import { postCreateBranch } from './postCreateBranch'

export const postCreateBranchHadnler = (req: Request, res: Response) =>
  postCreateBranch(req).then(resData(res)).catch(resError(res))
