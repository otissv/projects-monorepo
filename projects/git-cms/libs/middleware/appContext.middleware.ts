/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statement */

import { Octokit } from '@octokit/rest'
import { createAppAuth } from '@octokit/auth-app'
import { rejectError } from 'c-ufunc'

const getInstallation = async ({
  appId,
  octokit,
}: {
  readonly appId: string
  readonly octokit: any
}) =>
  octokit.apps
    .listInstallations()
    .then(
      (response: any) =>
        response.data.filter(({ app_id }: any) => app_id === appId)[0]
    )
    .catch(rejectError)

const getOctokit = ({ appId, installation, privateKey }: any) =>
  new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId,
      privateKey,
      installationId: installation.id,
    },
  })

export function appContext({ state, ...app }: any) {
  return async (req: any, _res: any, next: any) => {
    // eslint-disable-next-line functional/no-try-statement
    try {
      const installation = await getInstallation({
        appId: state.appId,
        octokit: state.octokit,
      })

      const octokit = getOctokit({
        appId: state.appId,
        installation,
        privateKey: state.privateKey,
      })

      req.context = {
        ...app,
        ...state,
        octokit,
        installation,
      }
    } catch (error: unknown) {
      return Promise.reject(error)
    }

    return next()
  }
}
