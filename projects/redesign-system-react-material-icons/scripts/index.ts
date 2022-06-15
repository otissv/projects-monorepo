import glob from 'glob-promise'
import { createIcons } from './createIcons'
import { createIndexExports } from './createIndexExports'
import { createStories } from './createStories'
import { errorHandler, map } from './utils'
import { build } from './build'

//TODO: add ES modules output
glob('./svg/**/*.svg')
  .then(map(createIcons))
  .then(createIndexExports)
  .then(createStories)
  .then(build)
  .catch(errorHandler)
