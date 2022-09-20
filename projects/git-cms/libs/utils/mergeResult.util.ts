import deepmerge from 'deepmerge'

export const mergeResult =
  <Result>(result: Result) =>
  <Props>(props: Props) =>
    deepmerge(result as any, props as any)

export const mergeFnResult =
  <Fn extends Function>(fn: Fn) =>
  async <Props>(props: Props) => {
    return {
      ...(await fn(props)),
      ...props,
    }
  }
