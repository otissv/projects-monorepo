/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-try-statement */

import bodyParser from 'body-parser'
import cors from 'cors'

import { appContext } from './middleware/appContext.middleware'
import { removeHeader } from './middleware/removeHeader.middlware'
// import { Request, Response } from 'express'

import { routes } from './routes/routes'
import { queryToBody } from './utils'

export = async (app: any, { getRouter }: any) => {
  try {
    const router = getRouter('/git-cms')
    router.use(cors())
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    router.use(require('express').static('public'))
    router.use(bodyParser.urlencoded({ extended: false }))
    router.use(bodyParser.json())
    router.use(queryToBody)
    router.use(appContext(app))
    router.use(removeHeader)

    routes(router)
  } catch (error) {
    console.error(error)
  }
}
