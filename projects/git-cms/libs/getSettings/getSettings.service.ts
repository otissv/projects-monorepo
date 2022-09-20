import { Octokit } from '@octokit/rest'
import { rejectError } from 'c-ufunc'

import { getFileContentService } from '../getFileContent'

export const getSettingsService = ({
  branch,
  octokit,
  owner,
  repo,
}: {
  readonly branch: string
  readonly octokit: Octokit
  readonly owner: string
  readonly repo: string
}) =>
  getFileContentService({
    branch: branch.trim(),
    owner: owner.trim(),
    repo: repo.trim(),
    octokit,
    path: '/git-cms.yml',
  }).catch(rejectError)
