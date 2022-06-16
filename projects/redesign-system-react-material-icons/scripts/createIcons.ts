import { readFile, errorHandler, writeDataToFile, getPathsInfo } from './utils'

export const pathInfo = async (
  path: string
): Promise<{
  fileName: string
  path: string
}> => getPathsInfo(path)

const requireSvg = async ({
  path,
  ...props
}: {
  fileName: string
  path: string
}) => {
  try {
    return {
      ...props,
      path,
      data: await readFile(path, 'utf8').catch(console.error),
    }
  } catch (error) {
    return errorHandler(error)
  }
}

const makeReactIcon = async ({
  fileName,
  data,
  ...props
}: {
  path: string
  data: string | void
  fileName: string
}) => {
  try {
    const componentName = `${fileName}Icon`
    const componentString = `import React, { FC } from 'react';
import { Icon, IconInterface } from "@redesign-system/react/libs";

export const ${componentName}: FC<IconInterface> = ({
  className,
  ...propsRest
}) => {
  const classNames =  \`${componentName} \${className}\`;
  return (
    <Icon alt="${fileName}" className={classNames} {...propsRest}>
      ${data}
    </Icon>
  );
};
${componentName}.displayName = '${componentName}';
  `
    return {
      ...props,
      fileName: `${fileName}Icon`,
      data: componentString,
    }
  } catch (error) {
    return errorHandler(error)
  }
}

export const createIcons = (
  path: string
): Promise<{
  data: any
  fileName: any
  dest: any
} | void> =>
  pathInfo(path)
    .then(requireSvg)
    .then(makeReactIcon)

    .then((props) => ({
      ...props,
      dest: `./libs`,
    }))
    .then(({ path, ...props }) => writeDataToFile({ paths: [path], ...props }))
    .catch(errorHandler)
