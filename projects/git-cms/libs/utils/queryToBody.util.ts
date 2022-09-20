/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-return-void */

import { Request, Response, NextFunction } from 'express'

export function queryToBody(req: Request, _res: Response, next: NextFunction) {
  // eslint-disable-next-line functional/immutable-data
  req.body = {
    ...req.query,
    ...req.body,
  }

  next()
}
