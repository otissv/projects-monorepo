import { Base64 } from 'js-base64'
import { Octokit } from '@octokit/rest'
import { rejectError } from 'c-ufunc'

export const postSaveFileContentService = ({
  branch,
  content,
  message,
  octokit,
  owner,
  path,
  repo,
  sha,
  author,
  committer,
}: {
  readonly author: {
    readonly name: string
    readonly email: string
    readonly date?: string | undefined
  }
  readonly branch: string
  readonly committer: {
    readonly name: string
    readonly email: string
    readonly date?: string | undefined
  }
  readonly content: string
  readonly message: string
  readonly octokit: Octokit
  readonly owner: string
  readonly path: string
  readonly repo: string
  readonly sha?: string
}) =>
  octokit.repos
    .createOrUpdateFileContents({
      branch: branch.trim(),
      content: Base64.encode(content),
      message: message.trim(),
      owner: owner.trim(),
      path: path.trim(),
      repo: repo.trim(),
      ...(sha ? { sha } : {}),
      committer,
      author,
    })
    .catch(rejectError)
