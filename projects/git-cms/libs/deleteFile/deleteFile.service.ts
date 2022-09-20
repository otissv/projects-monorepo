import { Octokit } from '@octokit/rest'
import { rejectError } from 'c-ufunc'

export const deleteFileService = ({
  branch,
  message,
  octokit,
  owner,
  path,
  repo,
  sha,
  author,
  committer,
}: {
  readonly branch: string
  readonly message: string
  readonly octokit: Octokit
  readonly owner: string
  readonly path: string
  readonly repo: string
  readonly sha: string
  readonly author: {
    readonly name: string
    readonly email: string
    readonly date?: string | undefined
  }
  readonly committer: {
    readonly name: string
    readonly email: string
    readonly date?: string | undefined
  }
}) =>
  octokit.repos
    .deleteFile({
      branch,
      message,
      owner,
      path,
      repo,
      sha,
      committer,
      author,
    })
    .catch(rejectError)
