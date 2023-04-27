/* eslint-disable functional/no-conditional-statement */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-loop-statement */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable functional/prefer-readonly-type */
/* eslint-disable functional/no-let */

import {
  addToCollection,
  mapClear,
  mapDeleteItem,
  mapMerge,
  mapSquence,
  mapEffect,
  mapLogger,
  mapFilter,
  mapFindItem,
  mapForEach,
  mapMap,
  mapReduce,
  mapReduceRight,
  mapRevese,
  mapSet,
  mapSize,
  collectionUpdateItem,
  mapToArray,
  collectionToObject,
} from './collection.methods'
import {
  mapEntriesToArray,
  mapToObject,
  mapKeysToArray,
  mapValuesToArray,
  toString,
} from './utils'

const get =
  <Key, Value extends Map<any, any>>(id: Key) =>
  (coll: Map<any | number, Value>) => {
    const map = id != null ? coll.get(id as any) || new Map() : coll
    return itemMethods(map)
  }

const methods =
  <Key, Value extends Map<any, any>>(coll: Map<any, Value>) =>
  (sequence: Function[]) => {
    console.log('methods coll', coll)
    return {
      add:
        <Key>(id: Key) =>
        <Data extends Record<string, any>>(data: Data[] | string) => {
          sequence.push(addToCollection(id)(data))
          return methods(coll)(sequence)
        },
      clear: () => {
        sequence.push(mapClear)
        return methods(coll)(sequence)
      },
      // clone: () => {
      //   return methods(mapSquence(sequence)(coll))(sequence)
      // },
      delete: (id: Key) => {
        sequence.push(mapDeleteItem(id))
        return methods(coll)(sequence)
      },
      entries: () => {
        return {
          exec: () => coll.entries(),
          toArray: (fn?: ([key, value]: [Key, Value]) => any) =>
            mapEntriesToArray(fn)(coll),
          toString: (n?: number) =>
            toString(
              mapEntriesToArray(([key, value]) => [
                `${key}`,
                mapToObject()(value),
              ]) as any
            )(n)(coll),
        }
      },
      filter: (fn: ([key, value]: [Key, Value]) => boolean) => {
        sequence.push(mapFilter(fn))
        return methods(mapFilter(fn)(coll))(sequence)
      },
      find: (fn: ([key, value]: [Key, Value]) => boolean) => {
        sequence.push(mapFindItem(fn))
        return itemMethods(mapSquence(sequence)(coll))
      },
      forEach: (fn: ([key, value]: [Key, Value]) => any) => {
        sequence.push(mapForEach(fn))
        return methods(coll)(sequence)
      },
      exec: () => mapSquence(sequence)(coll),
      get: (id?: Key) => {
        return id != null ? get(id)(coll) : itemMethods(coll)
      },
      has: (id: Key) => {
        const hasId = coll.has(id)
        return {
          exec: () => hasId,
          toString: (n?: number) =>
            hasId ? toString()(n)(mapToObject()(coll.get(id) as any)) : '',
          toObject: () =>
            hasId ? mapToObject()(coll.get(id) as any) : undefined,
          get: () => (hasId ? itemMethods(coll.get(id) as any) : undefined),
        }
      },
      keys: () => {
        return {
          exec: () => coll.keys(),
          toArray: <Key>(fn?: (key: Key) => any) => mapKeysToArray(fn)(coll),
          toString: (n?: number) =>
            JSON.stringify(mapKeysToArray()(coll), null, n),
        }
      },
      effect: (fn: (collection: typeof coll) => void) => {
        sequence.push(mapEffect(fn))

        return methods(coll)(sequence)
      },
      log: () => {
        sequence.push(mapLogger)
        return methods(coll)(sequence)
      },
      map: (fn: (value: [Key, Value]) => any) => {
        sequence.push(mapMap(fn))
        return methods(coll)(sequence)
      },
      merge: (map: Map<Key, Value>) => {
        sequence.push(mapMerge(map))
        return methods(coll)(sequence)
      },
      reduce:
        <Data>(fn: (acc: Data, [key, value]: [Key, Value]) => Data) =>
        (acc: Data) => {
          sequence.push(mapReduce(fn)(acc))
          return methods(coll)(sequence)
        },
      reduceRight:
        <Data>(fn: (acc: Data, [key, value]: [Key, Value]) => Data) =>
        (acc: Data) => {
          sequence.push(mapReduceRight(fn)(acc))
          return methods(coll)(sequence)
        },
      reverse: () => {
        sequence.push(mapRevese)
        return methods(coll)(sequence)
      },
      set: ([id, obj]: [Key, Record<any, any | Value>]) => {
        const data = obj instanceof Map ? obj : new Map(Object.entries(obj))
        sequence.push(mapSet([id, data]))
        return methods(coll)(sequence)
      },
      size: () => {
        sequence.push(mapSize)
        return methods(coll)(sequence)
      },

      // sort: (fn?: ([a, b]: [[Key, Value], [Key, Value]]) => number) => {
      //   const arr = Array.from(coll)
      //   coll.clear()

      //   const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      //   x.sort((x: any) => {
      //     console.log(x)
      //     return 1
      //   })

      //   // .forEach(([key, value]) => coll.set(key, value))
      //   return methods(coll)
      // },

      update: ([id, obj]: [Key, Record<any, any | Value>]) => {
        sequence.push(collectionUpdateItem([id, obj]))
        return methods(coll)(sequence)
      },
      values: () => {
        return {
          exec: () => coll.values(),
          toArray: (fn?: (value: Value) => any) => mapValuesToArray(fn)(coll),
          toString: (n?: number) =>
            JSON.stringify(mapValuesToArray(mapToObject())(coll), null, n),
        }
      },
      toArray: (fn?: (value: Value) => any) => {
        sequence.push(mapToArray(fn))
        return mapSquence(sequence)(coll)
      },
      toObject: () => {
        // sequence.push(collectionToObject)
        collectionToObject
        return mapSquence(sequence)(coll)
      },
      toString: (n?: number) => {
        sequence.push(toString(mapToArray(mapToObject()) as any)(n))
        return mapSquence(sequence)(coll)
      },
    }
  }

const itemMethods = <Key, Value>(map: Map<any | number, Value>) => {
  const newMap = new Map(map)

  return {
    clear: () => {
      newMap.clear()
      return itemMethods(newMap)
    },
    concat: (obj: Map<any, any | Value>) =>
      itemMethods(new Map([...newMap, ...obj])),
    delete: (id: Key) => {
      newMap.delete(id)
      return itemMethods(newMap)
    },
    entries: () => newMap.entries(),
    exec: () => {
      return map
    },
    forEach: (fn: ([key, value]: [Key, Value]) => void) => {
      for (const [key, value] of newMap) {
        fn([key, value])
      }
    },
    has: (id: Key) => {
      const hasId = newMap.has(id)
      return {
        exec: () => hasId,
        toString: (n?: number) =>
          hasId ? toString()(n)(mapToObject()(newMap.get(id) as any)) : '',
        toObject: () =>
          hasId ? mapToObject()(newMap.get(id) as any) : undefined,
        get: () => (hasId ? itemMethods(newMap) : undefined),
      }
    },
    key: (id: Key) => newMap.get(id),
    keys: () => newMap.keys(),
    map: <Data>(fn: ([key, value]: [Key, Value]) => Data) => {
      const arr: Data[] = []
      for (const [key, value] of newMap) {
        arr.push(fn([key, value]))
      }
      return arr
    },
    reduce:
      <Data>(fn: (acc: Data, [key, value]: [Key, Value]) => Data) =>
      (acc: Data) => {
        for (const [key, value] of newMap) {
          acc = fn(acc, [key, value])
        }
        return acc
      },
    reduceRight:
      <Data>(fn: (acc: Data, [key, value]: [Key, Value]) => Data) =>
      (acc: Data) => {
        const arr = Array.from(newMap)
        for (let i = arr.length - 1; i >= 0; i--) {
          const key = arr[i][0]
          const value = arr[i][1]
          acc = fn(acc, [key, value])
        }
        return acc
      },
    reverse: () => {
      const arr = Array.from(newMap)

      newMap.clear()
      for (let i = arr.length - 1; i >= 0; i--) {
        newMap.set(arr[i][0], arr[i][1])
      }

      return itemMethods(newMap)
    },
    set: ([key, value]: [any, any]) => {
      newMap.set(key, value)
      return itemMethods(newMap)
    },
    size: () => newMap.size,
    //sort
    value: (id: Key) => (id != null ? newMap.get(id as any) : undefined),
    values: () => newMap.values(),
    toArray: () => {
      const arr: any[] = []
      for (const [_key, value] of newMap) {
        arr.push(value)
      }
      return arr
    },
    toObject: () => mapToObject()(newMap),
    toString: (n?: number) => toString(mapToObject() as any)(n)(newMap),
  }
}

export const collection = <Key, Value extends Map<any, any>>() => {
  const coll: Map<any | number, Value> = new Map()
  const sequence: Function[] = []

  return methods<Key, Value>(coll)(sequence)
}
