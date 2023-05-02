/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-conditional-statement */
/* eslint-disable functional/prefer-readonly-type */
/* eslint-disable functional/no-loop-statement */
export const toString =
  <Value>(fn?: (value: Value | Value[]) => any | any[]) =>
  (n?: number) =>
  (value: Value) =>
    JSON.stringify(fn ? fn(value) : value, null, n)

export const mapToObject =
  <Key, Value>(
    fn?: ([key, value]: [Key, Value]) => Record<string | number | symbol, Value>
  ) =>
  (map: Map<Key, Value>) => {
    const obj: Record<string | number | symbol, any> = {}
    for (const [key, value] of map) {
      obj[key as any] = fn ? fn([key, value]) : value
    }
    return obj
  }

export const mapKeysToArray =
  <Key>(fn?: (key: Key) => any) =>
  (map: Map<Key, Map<any, any>>) => {
    const arr: any[] = []
    for (const [key] of map) {
      if (fn) {
        arr.push(fn(key))
      } else {
        arr.push(key)
      }
    }
    return arr
  }

export const mapEntriesToArray =
  <Key, Value>(fn?: ([key, value]: [Key, Value]) => any) =>
  (map: Map<Key, Value>) => {
    const arr: any[] = []
    for (const [key, value] of map) {
      arr.push(fn ? fn([key, value]) : [key, value])
    }
    return arr
  }
export const mapValuesToArray =
  <Key, Value extends Map<any, any>>(fn?: (value: Value) => any) =>
  (map: Map<Key, Value>) => {
    const arr: any[] = []
    for (const [_key, value] of map) {
      arr.push(fn ? fn(value) : value)
    }
    return arr
  }
