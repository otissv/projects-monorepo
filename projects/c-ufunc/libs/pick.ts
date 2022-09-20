/**
 * Transforms a string to snake case
 *
 * @param   array - Array of keys (strings) to inclued.
 *
 * @returns Returns a new object with only the requested keys included.
 *
 * @usage
 * `import { pick } from "c-ufunc/libs/pick"`
 *
 * @example
 * ```
 * const obj = { a:'a', b:'b', c:'c', d:'d' }
 *
 * pick(['a', 'd'])(obj) //{ a:'a', d:'d' }
 * ```
 */
export const pick =
  (keysToEsxtracrt: readonly string[]) =>
  <Obj extends {}>(obj: Obj) =>
    Object.keys(obj).reduce(
      (acc: Partial<Obj>, key) => ({
        ...acc,
        ...(keysToEsxtracrt.includes(key) ? { [key]: (obj as any)[key] } : {}),
      }),
      {}
    )
