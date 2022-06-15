import * as childProcess from 'node:child_process'
import * as fs from 'node:fs'
import * as util from 'node:util'
import T2W from 'numbers2words'
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
  data: string
  fileName: string
  dest: string
}) => writeFile(`${dest}/${fileName}.tsx`, data, { flag: 'w' })

export const errorHandler = (error: unknown) => {
  // eslint-disable-next-line functional/no-expression-statement
  process.stdout.write(error as string)
  // eslint-disable-next-line functional/no-expression-statement
  process.exit(1)
}

export const fileNameBeginsWithNumberToWord = (file: string) => {
  const translator = new T2W('EN_US')

  const fileNameBeginsWithNumber = file.match(/^(\d)(.*)/)

  const fileName = (file: string) =>
    fileNameBeginsWithNumber
      ? (file = `${translator.toWords(
          parseInt(fileNameBeginsWithNumber[1], 10)
        )}-${fileNameBeginsWithNumber[2]}`)
      : file

  return toFileName(fileName(file))
}

export const foldPaths = ({
  paths,
}: {
  paths: string[]
  data: string
  fileName: string
  dest: string
}) => paths

export const getPathsInfo = (path: string) => {
  try {
    if (typeof path !== 'string') {
      throw 'getPathsInfo: path must be string'
    }
    return svgPathInfo(path)
  } catch (error) {
    return errorHandler(error)
  }
}

export const map =
  (fn: Function) =>
  <Item>(list: Item[]) => {
    list.map((i) => fn(i))
    return list
  }

export const removeOutputDir = async (paths: string[]) =>
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
  paths: string[]
  data: string
  fileName: string
  dest: string
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
