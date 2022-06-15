export function map(fn?: (key: string | number, value: any) => any): any {
  const list: readonly any[] = []

  return (object: any) => {
    switch (true) {
      case Array.isArray(object):
        return object.map((value: string, index: number) =>
          fn ? fn(index, value) : [index, value]
        )

      case Boolean(object.forEach): {
        // eslint-disable-next-line functional/no-expression-statement
        object.forEach((value: string, key: string) =>
          (list as any).push(fn ? fn(key, value) : [key, value])
        )
        return list
      }

      default:
        return Object.entries(object).map((value: readonly [string, any]) =>
          fn ? fn(...value) : value
        )
    }
  }
}
