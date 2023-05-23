export type Sequence = Function[]

export type ID = string | number | symbol

export type ItemMethods = <Value>(
  sequence: Function[],
  item: Map<ID, Value>
) => {
  clear: () => ItemMethods
}
