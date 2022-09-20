import { Octokit } from '@octokit/rest'
import { rejectError } from 'c-ufunc'

export const getRepoService = ({
  octokit,
  owner,
  repo,
}: {
  readonly octokit: Octokit
  readonly owner: string
  readonly repo: string
}) =>
  octokit.repos
    .get({ owner: owner.trim(), repo: repo.trim() })
    .then(({ data }: any) => data)
    .catch(rejectError)
