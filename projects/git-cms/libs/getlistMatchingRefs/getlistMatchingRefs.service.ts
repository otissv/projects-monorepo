import { Octokit } from '@octokit/rest'
import { rejectError } from 'c-ufunc'

export const getlistMatchingRefsService = ({
  octokit,
  owner,
  ref,
  repo,
}: {
  readonly octokit: Octokit
  readonly owner: string
  readonly ref: string
  readonly repo: string
}) =>
  octokit.git
    .listMatchingRefs({
      owner,
      repo,
      ref,
    })
    .catch(rejectError)
