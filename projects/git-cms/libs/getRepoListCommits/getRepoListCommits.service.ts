import { Octokit } from '@octokit/rest'
import { rejectError } from 'c-ufunc'

export const getRepoListCommitsService = ({
  branch,
  octokit,
  owner,
  repo,
}: {
  readonly branch: string
  readonly owner: string
  readonly ref: string
  readonly repo: string
  readonly octokit: Octokit
}) =>
  octokit.repos
    .listCommits({
      owner,
      repo,
      sha: branch,
      per_page: 1,
    })
    .then(({ data }: Record<string, any>) => data[0])
    .catch(rejectError)
