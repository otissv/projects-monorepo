import { Response, Request } from 'express'
import { resData, resError } from '../utils/response'

import { deleteRef } from './deleteRef'

export const deleteRefHadnler = (req: Request, res: Response) =>
  deleteRef(req).then(resData(res)).catch(resError(res))
