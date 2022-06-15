import { errorHandler, getPathsInfo, writeDataToFile, foldPaths } from './utils'

const makeIndex = async (paths: string[]) => {
  const exportsString = paths.reduce((acc, path) => {
    const { fileName } = getPathsInfo(path)

    return `${acc}
  export * from './${fileName}Icon'`
  }, '')

  return {
    paths,
    data: exportsString,
    dest: './libs',
    fileName: 'index',
  }
}

export const createIndexExports = (paths: string[]) =>
  makeIndex(paths).then(writeDataToFile).then(foldPaths).catch(errorHandler)
