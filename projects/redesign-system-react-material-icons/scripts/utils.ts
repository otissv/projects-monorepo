/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-try-statement */
import * as childProcess from 'node:child_process'
import * as fs from 'node:fs'
import * as util from 'node:util'
import { ToWords } from 'to-words'
import { toCamel, toUpperFirst } from 'c-ufunc/libs'
import mkdirp from 'mkdirp'
import rimraf from 'rimraf'

export const writeFile = util.promisify(fs.writeFile)

export const readFile = util.promisify(fs.readFile)

export const exec = util.promisify(childProcess.exec)

export const writeFileToDest = ({
  data,
  fileName,
  dest,
}: {
  readonly data: string
  readonly fileName: string
  readonly dest: string
}) => writeFile(`${dest}/${fileName}.tsx`, data, { flag: 'w' })

// eslint-disable-next-line functional/no-return-void
export const errorHandler = (error: unknown) => {
  console.error(error)
  process.exit(1)
}

export const fileNameBeginsWithNumberToWord = (file: string) => {
  const toWords = new ToWords({ localeCode: 'en-US' })

  const fileNameBeginsWithNumber = file.match(/^(\d)(.*)/)

  const fileName = (file: string) =>
    fileNameBeginsWithNumber
      ? (file = `${toWords.convert(
          parseInt(fileNameBeginsWithNumber[1], 10)
        )}-${fileNameBeginsWithNumber[2]}`)
      : file

  return toFileName(fileName(file))
}

export const foldPaths = ({
  paths,
}: {
  readonly paths: readonly string[]
  readonly data: string
  readonly fileName: string
  readonly dest: string
}) => paths

export const getPathsInfo = (path: string) => {
  try {
    if (typeof path !== 'string') {
      // eslint-disable-next-line functional/no-throw-statement
      throw 'getPathsInfo: path must be string'
    }
    return svgPathInfo(path)
  } catch (error) {
    return errorHandler(error)
  }
}

export const map =
  (fn: Function) =>
  <Item>(list: readonly Item[]) => {
    list.map((i) => fn(i))
    return list
  }

export const removeOutputDir = async (paths: readonly string[]) =>
  rmdir('./src')
    .then(() => paths)
    .catch(errorHandler)

export const rmdir = async (path: string) =>
  rimraf(path, (error: unknown) =>
    error ? Promise.reject(error) : Promise.resolve(`rmdir success: ${path}`)
  )

export const svgPathInfo = (path: string) => {
  const match: any = path.match(/\.\/svg\/(.*)(\.svg)/)
  const file = match[1]

  return {
    path,
    fileName: fileNameBeginsWithNumberToWord(file),
  }
}

export const toFileName = (str: string) => toUpperFirst(toCamel(str))

export const writeDataToFile = ({
  data,
  fileName,
  dest,
  ...props
}: {
  readonly paths: readonly string[]
  readonly data: string
  readonly fileName: string
  readonly dest: string
}) =>
  mkdirp(dest)
    .then(() => writeFileToDest({ data, fileName, dest }))
    .then(() => ({
      ...props,
      data,
      fileName,
      dest,
    }))
    .catch(errorHandler)
