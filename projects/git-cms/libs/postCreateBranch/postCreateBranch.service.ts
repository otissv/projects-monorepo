import { Octokit } from '@octokit/rest'
import { rejectError } from 'c-ufunc'

export const postCreateBranchService = ({
  octokit,
  owner,
  ref,
  repo,
  sha,
}: {
  readonly octokit: Octokit
  readonly owner: string
  readonly ref: string
  readonly repo: string
  readonly sha: string
}) =>
  octokit.git
    .createRef({
      owner,
      repo,
      ref, // refs/heads/master
      sha,
    })
    .catch(rejectError)
