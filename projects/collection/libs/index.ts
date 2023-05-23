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
} from './methods'
import {
  mapEntriesToArray,
  mapToObject,
  mapKeysToArray,
  mapValuesToArray,
  toString,
} from './utils'

export type Sequence = Function[]

export type ID = string | number | symbol

export const collection = <Key, Value>() => {
  const coll: Map<ID, Map<Key, Value>> = new Map()
  const sequence: Function[] = []

  return methods(sequence)(coll)
}

//TODO: add fn arg to all exec

const methods =
  (sequence: Function[]) =>
  <Key, Value>(coll: Map<ID, Map<Key, Value>>) => {
    type Item = Map<unknown, any>

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
      delete: (id: ID) => {
        sequence.push(mapDeleteItem(id))
        return methods(sequence)(coll)
      },
      effect: (fn: (collection: typeof coll) => void) => {
        sequence.push(mapEffect(fn))
        return methods(sequence)(coll)
      },
      entries: () => {
        const items = mapSequence(sequence)(coll)

        return {
          effect: (
            fn: (entries: IterableIterator<[any, Map<Key, Value>]>) => void
          ) => {
            fn(items.entries())
            return methods(sequence)(coll).entries()
          },
          log: () => {
            sequence.push(mapLogger)
            return methods(sequence)(coll).entries()
          },
          exec: () => items.entries(),
          toArray: (fn?: ([id, item]: [ID, Item]) => any) =>
            mapEntriesToArray(fn)(items),
          toString: (n?: number) =>
            toString(
              mapEntriesToArray(([id, item]) => [
                `${id}`,
                mapToObject()(item as Item),
              ]) as any
            )(n)(items),
        }
      },
      exec: () => mapSequence([...sequence])(coll),
      filter: (fn: ([id, item]: [ID, Item]) => boolean) => {
        sequence.push(mapFilter(fn))
        return methods(sequence)(mapFilter(fn)(coll))
      },
      find: (fn: ([id, item]: [ID, Item]) => boolean) => {
        sequence.push(mapFindItem(fn))
        return itemMethods([])(mapSequence(sequence)(coll))
      },
      forEach: (fn: ([id, item]: [ID, Item]) => any) => {
        sequence.push(mapForEach(fn))
        return methods(sequence)(coll)
      },

      get: (id: ID) => {
        const newColl = mapSequence(sequence)(coll)
        const map = id != null ? newColl.get(id as any) || new Map() : newColl
        return itemMethods([])(map)
      },
      has: (id: ID) => {
        const items = mapSequence(sequence)(coll)
        const hasId = items.has(id)
        return {
          effect: (fn: (has: boolean) => void) => {
            fn(hasId)
            return methods(sequence)(coll).has(id)
          },
          log: () => {
            sequence.push(mapLogger)
            return methods(sequence)(coll).has(id)
          },
          exec: () => hasId,
          get: () =>
            itemMethods([])(hasId ? (items.get(id) as any) : new Map()),
          toString: (n?: number) =>
            hasId ? toString()(n)(mapToObject()(items.get(id) as any)) : '',
          toObject: () => (hasId ? mapToObject()(items.get(id) as any) : {}),
        }
      },
      keys: () => {
        const items = mapSequence(sequence)(coll)
        return {
          effect: (fn: (keys: IterableIterator<any>) => void) => {
            fn(items.keys())
            return methods(sequence)(coll).keys()
          },
          log: () => {
            sequence.push(mapLogger)
            return methods(sequence)(coll).keys()
          },
          exec: () => items.keys(),
          toArray: (fn?: (id: ID) => any) => mapKeysToArray(fn)(items),
          toString: (n?: number) =>
            JSON.stringify(mapKeysToArray()(items), null, n),
        }
      },
      log: () => {
        sequence.push(mapLogger)
        return methods(sequence)(coll)
      },
      map: <Data>(fn: ([id, item]: [ID, Item]) => Data) => {
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
          effect: (fn: (keys: IterableIterator<any>) => void) => {
            fn(items.values())
            return methods(sequence)(coll).values()
          },
          log: () => {
            sequence.push(mapLogger)
            return methods(sequence)(coll).values()
          },
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

const itemMethods =
  (sequence: Function[]) =>
  <Key, Value>(item: Map<Key, Value>) => {
    type Item = Map<any, any>

    return {
      clear: () => {
        sequence.push(mapClear)
        return itemMethods(sequence)(item)
      },

      delete: (id: Key) => {
        sequence.push(mapDeleteItem(id))
        return itemMethods(sequence)(item)
      },
      effect: (fn: (item: Map<Key, Value>) => void) => {
        sequence.push(mapEffect(fn))
        return itemMethods(sequence)(item)
      },
      entries: () => {
        return {
          effect: (fn: (entries: IterableIterator<[Key, Value]>) => void) => {
            fn(item.entries())
            return itemMethods(sequence)(item).entries()
          },
          log: () => {
            sequence.push(mapLogger)
            return itemMethods(sequence)(item).entries()
          },
          exec: () => item.entries(),
          toArray: (fn?: ([id, item]: [Key, Value]) => any) =>
            mapEntriesToArray(fn)(item as Item),
          toString: (n?: number) =>
            toString(mapEntriesToArray(([id, item]) => [`${id}`, item]) as any)(
              n
            )(item),
        }
      },
      exec: () => mapSequence(sequence)(item as Map<ID, Item>),
      forEach: (fn: ([key, value]: [Key, Value]) => boolean) => {
        sequence.push(mapForEach(fn))
        return itemMethods([])(mapSequence(sequence)(item as Map<ID, Item>))
      },
      has: (id: Key) => {
        const items = mapSequence(sequence)(item as Map<ID, Item>)
        const hasId = items.has(id)
        return {
          effect: (fn: (has: boolean) => void) => {
            fn(hasId)
            return itemMethods(sequence)(items).has(id)
          },
          log: () => {
            sequence.push(mapLogger)
            return itemMethods(sequence)(items).has(id)
          },
          exec: () => hasId,
          get: () => itemMethods([])(hasId ? items : new Map()),
          toObject: () => (hasId ? mapToObject()(items) : {}),
          toString: (n?: number) =>
            hasId ? toString()(n)(mapToObject()(items)) : '',
        }
      },
      keys: () => {
        const items = mapSequence(sequence)(item as Map<ID, Item>)
        return {
          effect: (fn: (keys: IterableIterator<any>) => void) => {
            fn(items.keys())
            return itemMethods(sequence)(items).keys()
          },
          log: () => {
            sequence.push(mapLogger)
            return itemMethods(sequence)(items).keys()
          },
          exec: () => items.keys(),
          toArray: (fn?: (id: Key) => any) => mapKeysToArray(fn)(items),
          toString: (n?: number) =>
            JSON.stringify(mapKeysToArray()(items), null, n),
        }
      },
      map: <Data>(fn: ([key, value]: [Key, Value]) => Data) => {
        sequence.push(mapMap(fn))
        return itemMethods(sequence)(item)
      },
      merge: (obj: Map<any, any | Value>) => {
        sequence.push(mapMerge(obj))
        return itemMethods(sequence)(item)
      },
      reduce:
        <Data>(fn: (acc: Data, [key, value]: [Key, Value]) => Data) =>
        (acc: Data) => {
          sequence.push(mapReduce(fn)(acc))
          return itemMethods(sequence)(item)
        },
      reduceRight:
        <Data>(fn: (acc: Data, [key, value]: [Key, Value]) => Data) =>
        (acc: Data) => {
          sequence.push(mapReduceRight(fn)(acc))
          return itemMethods(sequence)(item)
        },
      reverse: () => {
        sequence.push(mapRevere)
        return itemMethods(sequence)(item)
      },
      set: ([key, value]: [any, any]) => {
        item.set(key, value)
        return itemMethods(sequence)(item)
      },
      size: () => {
        sequence.push(mapSize)
        return itemMethods(sequence)(item)
      },
      //sort
      value: (id: Key) => (id != null ? item.get(id as any) : undefined),
      values: () => {
        mapValuesToArray
        const items = mapSequence(sequence)(item as Map<ID, Item>)
        const values = items.values()
        return {
          effect: (fn: (keys: IterableIterator<any>) => void) => {
            fn(items.values())
            return itemMethods(sequence)(items).values()
          },
          log: () => {
            sequence.push(mapLogger)
            return itemMethods(sequence)(items).values()
          },
          exec: () => values,
          toArray: (fn?: (map: Item) => any) => mapValuesToArray(fn)(items),
          toString: (n?: number) =>
            JSON.stringify(mapValuesToArray(mapToObject())(items), null, n),
        }
      },
      toArray: (fn?: ([id, item]: [ID, Item]) => any) => {
        return mapSequence([...sequence, mapToArray(fn)])(item as Map<ID, Item>)
      },

      toObject: (fn?: ([id, item]: [ID, Item]) => any) => {
        return mapSequence([...sequence, mapToObject(fn)])(item as Item)
      },
      toString: (n?: number) => {
        return mapSequence([...sequence, toString(mapToObject() as any)(n)])(
          item as Item
        )
      },
    }
  }
