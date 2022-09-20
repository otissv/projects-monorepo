import { Octokit } from '@octokit/rest'
import { rejectError } from 'c-ufunc'
import yaml from 'yaml'
import matter from 'gray-matter'

const parseFileContent = ({ content, path }: Record<string, any>) => {
  const split = path.split('.')
  const ext: string = split[split.length - 1]

  const contentEncoded = Buffer.from(content, 'base64').toString().trim()

  // eslint-disable-next-line functional/no-expression-statement

  switch (ext.toLowerCase()) {
    case 'yaml':
    case 'yml':
      return yaml
        .parseAllDocuments(Buffer.from(content, 'base64').toString().trim())
        .map((data: yaml.Document.Parsed) => data.toJSON())
    case 'mdx':
      return matter(contentEncoded).content
    default:
      return ''
  }
}

export const getFileContentService = ({
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
    .then(({ data: { content, name, path, sha } }: any) => {
      // eslint-disable-next-line functional/no-expression-statement

      return {
        name,
        path,
        sha,
        content: parseFileContent({ content, path }),
      }
    })
    .catch(rejectError)
