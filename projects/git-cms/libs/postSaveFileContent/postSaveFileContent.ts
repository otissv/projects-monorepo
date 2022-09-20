import { Request } from 'express'
import { rejectError } from 'c-ufunc'
import yaml from 'yaml'

import { postSaveFileContentService } from './postSaveFileContent.service'
import { input, mergeFnResult, mergeResult } from '../utils'
import { getFileInfoService } from '../getFileInfo'

const contentsToYaml = ({ content, meta }: Record<string, any>) =>
  `---
${yaml.stringify(meta)}
---

${yaml.stringify(content)}
  `

export const postSaveFileContent = (req: Request) =>
  input({ ...req.body, octokit: (req as any).context.octokit })
    .then((data: Record<string, any>) => {
      const meta = {
        saved: new Date().toISOString(),
        updated: new Date().toISOString(),
        savedBy: data.user,
        updatedBy: data.user,
      }

      return {
        ...data,
        //TODO: get committer author and from auth
        committer: {
          name: 'Otis Virginie',
          email: 'otissv@gmail.com',
        },
        author: {
          name: 'Otis Virginie',
          email: 'otissv@gmail.com',
        },
        meta,
        content: contentsToYaml({ content: data.content, meta }),
      }
    })
    .then(mergeResult(contentsToYaml))
    .then(mergeFnResult(getFileInfoService))
    .then(postSaveFileContentService as any)
    .catch(rejectError)
