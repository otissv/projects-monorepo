import { mapClear } from './methods'
import { ID, ItemMethods } from './types'

type Sequence = Function[]

export const clearItem =
  (methods: ItemMethods) =>
  (sequence: Sequence) =>
  <Value>(item: Map<ID, Value>) => {
    sequence.push(mapClear)
    return methods(sequence, item)
  }
