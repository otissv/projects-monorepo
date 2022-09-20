/* eslint-disable functional/no-expression-statement */
import { Request, Response, NextFunction } from 'express'

export const removeHeader = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  res.removeHeader('x-powered-by')
  return next()
}
