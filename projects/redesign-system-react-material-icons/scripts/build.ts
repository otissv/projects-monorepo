/* eslint-plugin-disable functional */
import { errorHandler, getPathsInfo, exec, writeFile } from './utils'

import pkg from '../package.json'

const createDefinitions = async (paths: readonly string[]) => {
  const iconExports = paths.reduce((acc, path) => {
    const { fileName } = getPathsInfo(path)

    writeDefinitions(path).catch(errorHandler)

    return `${acc}
export * from './${fileName}Icon';`
  }, '')

  return writeFile(`./build/index.d.ts`, iconExports, {
    flag: 'w',
  })
    .then(() => paths)
    .catch(errorHandler)
}

const writeDefinitions = async (path: string) => {
  const { fileName } = getPathsInfo(path)

  const data = `import { FC } from "react";
import { IconInterface } from "@redesign-system/react/libs";
export declare const ${fileName}Icon: FC<IconInterface>;`

  writeFile(`./build/${fileName}Icon.d.ts`, data, { flag: 'w' }).catch(
    errorHandler
  )
}

const buildSource = async (paths: readonly string[]) =>
  exec('npm run generate')
    .then(() => paths)
    .catch(errorHandler)

const createPackageJson = (paths: readonly string[]) => {
  const npmPkg = {
    name: pkg.name,
    version: pkg.version,
    license: pkg.license,
    main: pkg.main,
    typings: pkg.typings,
    author: pkg.author,
    module: pkg.module,
    publishConfig: {
      access: 'public',
    },
    ...(pkg.peerDependencies ? { peerDependencies: pkg.peerDependencies } : {}),
    ...(pkg.peerDependencies ? { dependencies: pkg.dependencies } : {}),
  }

  return writeFile(`./build/package.json`, JSON.stringify(npmPkg, null, 2), {
    flag: 'w',
  })
    .then(() => paths)
    .catch(errorHandler)
}

export const build = async (paths: readonly string[]) =>
  createPackageJson(paths)
    .then(createDefinitions)
    .then(buildSource)
    .then(() => paths)
    .catch(errorHandler)
