import { Response } from 'express'
import { config } from '../config'

export const resData =
  (res: Response) =>
  <Data>(data: Data) =>
    res.json({ data, success: 'ok' })

export const resError = (res: Response) => async (error: unknown) => {
  // eslint-disable-next-line functional/no-expression-statement

  // eslint-disable-next-line functional/no-conditional-statement, functional/no-expression-statement
  if (config().isDev) console.log(error)

  return res
    .status(400)
    .json({ error: (error as Error).message, success: 'failed' })
}
