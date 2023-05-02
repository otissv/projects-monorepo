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
  mapSequence as mapSequence,
  mapEffect,
  mapLogger,
  mapFilter,
  mapFindItem,
  mapForEach,
  mapMap,
  mapReduce,
  mapReduceRight,
  mapRevere,
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

type ID = string | number | symbol

export const collection = <Key, Value>() => {
  type Item = Map<Key, Value>
  const coll: Map<ID, Item> = new Map()
  const sequence: Function[] = []

  return methods(sequence)(coll)
}

const get =
  <Key, Value>(id: ID) =>
  (coll: Map<ID, Map<Key, Value>>) => {
    const map = id != null ? coll.get(id as any) || new Map() : coll
    return itemMethods(map)
  }

const methods =
  (sequence: Function[]) =>
  <Key, Value>(coll: Map<ID, Map<Key, Value>>) => {
    type Item = Map<any, any>

    return {
      add:
        (id: ID) =>
        <Data extends Record<string, any>>(data: Data[] | string) => {
          sequence.push(addToCollection(id)(data))
          return methods(sequence)(coll)
        },
      clear: () => {
        sequence.push(mapClear)
        return methods(sequence)(coll)
      },
      // clone: () => {
      //   return methods(mapSequence(sequence)(coll))(sequence)
      // },
      delete: (id: ID) => {
        sequence.push(mapDeleteItem(id))
        return methods(sequence)(coll)
      },
      entries: () => {
        return {
          exec: () => coll.entries(),
          toArray: (fn?: ([id, item]: [ID, Item]) => any) =>
            mapEntriesToArray(fn)(coll),
          toString: (n?: number) =>
            toString(
              mapEntriesToArray(([id, item]) => [
                `${id}`,
                mapToObject()(item),
              ]) as any
            )(n)(coll),
        }
      },
      filter: (fn: ([id, item]: [ID, Item]) => boolean) => {
        sequence.push(mapFilter(fn))
        return methods(sequence)(mapFilter(fn)(coll))
      },
      find: (fn: ([id, item]: [ID, Item]) => boolean) => {
        sequence.push(mapFindItem(fn))
        return itemMethods(mapSequence(sequence)(coll))
      },
      forEach: (fn: ([id, item]: [ID, Item]) => any) => {
        sequence.push(mapForEach(fn))
        return methods(sequence)(coll)
      },
      exec: () => mapSequence([...sequence])(coll),
      get: (id?: ID) => {
        return id != null ? get(id as string)(coll) : itemMethods(coll)
      },
      has: (id: ID) => {
        const items = mapSequence(sequence)(coll)
        const hasId = items.has(id)
        return {
          exec: () => hasId,
          toString: (n?: number) =>
            hasId ? toString()(n)(mapToObject()(items.get(id) as any)) : '',
          toObject: () =>
            hasId ? mapToObject()(items.get(id) as any) : undefined,
          get: () => (hasId ? itemMethods(items.get(id) as any) : undefined),
        }
      },
      keys: () => {
        const items = mapSequence(sequence)(coll)
        return {
          exec: () => items.keys(),
          toArray: (fn?: (id: ID) => any) => mapKeysToArray(fn)(items),
          toString: (n?: number) =>
            JSON.stringify(mapKeysToArray()(items), null, n),
        }
      },
      effect: (fn: (collection: typeof coll) => void) => {
        sequence.push(mapEffect(fn))

        return methods(sequence)(coll)
      },
      log: () => {
        sequence.push(mapLogger)
        return methods(sequence)(coll)
      },
      map: (fn: (value: [ID, Item]) => any) => {
        sequence.push(mapMap(fn))
        return methods(sequence)(coll)
      },
      merge: (map: Map<ID, Item>) => {
        sequence.push(mapMerge(map))
        return methods(sequence)(coll)
      },
      reduce:
        <Data>(fn: (acc: Data, [id, Item]: [ID, Item]) => Data) =>
        (acc: Data) => {
          sequence.push(mapReduce(fn)(acc))
          return methods(sequence)(coll)
        },
      reduceRight:
        <Data>(fn: (acc: Data, [id, Item]: [ID, Item]) => Data) =>
        (acc: Data) => {
          sequence.push(mapReduceRight(fn)(acc))
          return methods(sequence)(coll)
        },
      reverse: () => {
        sequence.push(mapRevere)
        return methods(sequence)(coll)
      },
      set: ([id, obj]: [ID, Item | Record<ID, any>]) => {
        const data = obj instanceof Map ? obj : new Map(Object.entries(obj))
        sequence.push(mapSet([id, data]))
        return methods(sequence)(coll)
      },
      size: () => {
        sequence.push(mapSize)
        return methods(sequence)(coll)
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

      update: ([id, obj]: [
        ID,
        Item | Record<string | number | symbol, any>
      ]) => {
        sequence.push(collectionUpdateItem([id, obj]))
        return methods(sequence)(coll)
      },
      values: () => {
        const items = mapSequence(sequence)(coll)
        return {
          exec: () => items.values(),
          toArray: (fn?: (item: Item) => any) => mapValuesToArray(fn)(items),
          toString: (n?: number) =>
            JSON.stringify(mapValuesToArray(mapToObject())(items), null, n),
        }
      },
      toArray: (fn?: ([id, item]: [ID, Item]) => any) => {
        return mapSequence([...sequence, mapToArray(fn)])(coll)
      },
      toObject: (fn?: ([id, item]: [ID, Item]) => any) => {
        return mapSequence([...sequence, collectionToObject(fn)])(coll)
      },
      toString: (n?: number) => {
        return mapSequence([
          ...sequence,
          toString(
            mapToArray(([_id, item]) => mapToObject()(item as Item)) as any
          )(n),
        ])(coll)
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
