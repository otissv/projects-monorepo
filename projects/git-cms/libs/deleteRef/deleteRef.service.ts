import { Octokit } from '@octokit/rest'
import { rejectError } from 'c-ufunc'

export const deleteRefService = ({
  octokit,
  owner,
  ref,
  repo,
}: {
  readonly octokit: Octokit
  readonly owner: string
  readonly repo: string
  readonly ref: string
}) =>
  octokit.git
    .deleteRef({
      owner,
      repo,
      ref,
    })
    .catch(rejectError)
