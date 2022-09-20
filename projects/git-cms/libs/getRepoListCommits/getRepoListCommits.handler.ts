import { Response, Request } from 'express'
import { resData, resError } from '../utils/response'

import { getRepoListCommits } from './getRepoListCommits'

export const getRepoListCommitsHadnler = (req: Request, res: Response) =>
  getRepoListCommits(req).then(resData(res)).catch(resError(res))
