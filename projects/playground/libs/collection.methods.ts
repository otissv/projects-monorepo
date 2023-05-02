/* eslint-disable functional/no-conditional-statement */
/* eslint-disable functional/no-let */
/* eslint-disable functional/immutable-data */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-loop-statement */
/* eslint-disable functional/prefer-readonly-type */

import { cloneDeep } from 'c-ufunc/libs/exP/cloneDeep'
import { mapToObject } from './utils'

export const addToCollection =
  <Key, Value>(id: Key) =>
  <Data extends Record<string, any>>(data: Data[] | string) =>
  (map: Map<Key, Value>) => {
    const input = typeof data === 'string' ? JSON.parse(data) : data
    for (const item of input) {
      map.set((item as any)[id], new Map(Object.entries(item)) as any)
    }

    return map
  }

export const mapClear = <Key, Value>(map: Map<Key, Value>) => {
  map.clear()
  return map
}

export const mapDeleteItem =
  <Key, Value>(id: Key) =>
  (map: Map<Key, Value>) => {
    map.delete(id)
    return map
  }

export const mapEffect =
  <Key, Value>(fn: (map: Map<Key, Value>) => any) =>
  (map: Map<Key, Value>) => {
    fn(map)
    return map
  }

export const mapFilter =
  <Key, Value>(fn: ([key, value]: [Key, Value]) => boolean) =>
  (map: Map<Key, Value>) => {
    const newMap = new Map()

    for (const [key, value] of map) {
      // eslint-disable-next-line functional/no-conditional-statement
      if (fn([key, value])) newMap.set(key, value)
    }
    map = newMap

    return map
  }

export const mapFindItem =
  <Key, Value>(fn: ([key, value]: [Key, Value]) => boolean) =>
  (map: Map<Key, Value>) => {
    for (const [key, value] of map) {
      const res = fn([key, value])
      if (res) return value
    }
    return new Map()
  }

export const mapForEach =
  <Key, Value>(fn: ([key, value]: [Key, Value]) => any) =>
  (map: Map<Key, Value>) => {
    for (const [key, value] of map) {
      fn([key, value])
    }
    return map
  }

export const mapLogger = <Key, Value>(map: Map<Key, Value>) =>
  mapEffect(console.log)(map)

export const mapMap =
  <Key, Value>(fn: (value: [Key, Value]) => any) =>
  (map: Map<Key, Value>) => {
    const arr = []
    for (const [key, value] of map) {
      arr.push(fn([key, value]))
    }
    return arr
  }

export const mapMerge =
  <Key, Value>(newMap: Map<Key, Value>) =>
  (map: Map<Key, Value>) => {
    for (const [key, value] of newMap) {
      map.set(key, value)
    }

    return map
  }

export const mapReduce =
  <Key, Value, Data>(fn: (acc: Data, [key, value]: [Key, Value]) => Data) =>
  (acc: Data) =>
  (map: Map<Key, Value>) => {
    for (const [key, value] of map) {
      acc = fn(acc, [key, value])
    }

    return acc
  }

export const mapReduceRight =
  <Key, Value, Data>(fn: (acc: Data, [key, value]: [Key, Value]) => Data) =>
  (acc: Data) =>
  (map: Map<Key, Value>) => {
    const arr = Array.from(map)
    for (let i = arr.length - 1; i >= 0; i--) {
      const key = arr[i][0]
      const value = arr[i][1]
      acc = fn(acc, [key, value])
    }
    return acc
  }

export const mapRevere = <Key, Value>(map: Map<Key, Value>) => {
  const arr = Array.from(map)
  map.clear()
  for (let i = arr.length - 1; i >= 0; i--) {
    map.set(arr[i][0], arr[i][1])
  }
  return map
}

export const mapSequence =
  (sequence: Function[]) =>
  <Key, Value extends Map<Key, any>>(map: Map<any, Value>) => {
    // eslint-disable-next-line functional/no-let
    let newMap = cloneDeep(map)

    for (const fn of sequence) {
      newMap = fn(newMap)
    }
    return newMap
  }

export const mapSet =
  <Key, Value>([key, value]: [Key, Value]) =>
  (map: Map<Key, Value>) => {
    map.set(key, value)

    return map
  }

export const mapSize = <Key, Value>(map: Map<Key, Value>) => map.size

export const collectionUpdateItem =
  <Key, Value extends Map<any, any>>([id, obj]: [
    Key,
    Record<any, any | Value>
  ]) =>
  (map: Map<Key, Value>) => {
    const item = map.get(id)
    if (!item) {
      return map
    } else {
      const newMap = new Map(item)
      for (const [key, value] of Object.entries(obj)) {
        newMap.set(key, value)
      }
      map.set(id, newMap as any)
      return map
    }
  }

export const mapToArray =
  <Key, Value>(fn?: ([key, value]: [Key, Value]) => any) =>
  (map: Map<Key, Value>) => {
    if (map.size === 0) return []

    const arr = []

    for (const [key, value] of map) {
      if (fn) {
        arr.push(fn([key, value]))
      } else {
        arr.push(value)
      }
    }

    return arr
  }

export const collectionToObject =
  <Key, Value>(fn?: ([key, value]: [Key, Value]) => Record<any, any>) =>
  (map: Map<Key, Value>) => {
    console.log(map)
    if (map.size === 0) return {}
    const obj: Record<string, any> = {}

    for (const [key, value] of map) {
      obj[key as any] = mapToObject(fn)(value as any)
    }

    return obj
  }
