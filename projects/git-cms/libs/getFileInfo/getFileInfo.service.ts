import { Octokit } from '@octokit/rest'
import { rejectError } from 'c-ufunc'

export const getFileInfoService = ({
  branch,
  octokit,
  owner,
  path,
  repo,
}: {
  readonly branch: string
  readonly octokit: Octokit
  readonly owner: string
  readonly path: string
  readonly repo: string
}) =>
  octokit.repos
    .getContent({
      ref: branch.trim(),
      owner: owner.trim(),
      repo: repo.trim(),
      path: path.trim(),
    })
    .then(({ data }: Record<string, any>) => data)
    .catch(rejectError)
