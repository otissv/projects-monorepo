/**
 * Transforms a string to snake case
 *
 *
 * @param   array- Array of keys (strings) to omitted.
 *
 * @returns New object with keys with the omit keys.
 *
 * @usage
 * `import { omit } from "c-ufunc/libs/omit"`
 *
 * @example
 * ```
 * const obj = { a:'a', b:'b', c:'c', d:'d' }
 *
 * omit(['a', 'd'])(obj) //{ b:'b', c:'c' }
 * ```
 */
export const omit =
  (keysToExstracrt: readonly string[]) =>
  <Obj extends Record<any, any>>(obj: Obj) =>
    Object.keys(obj).reduce(
      (acc: Partial<Obj>, key) => ({
        ...acc,
        ...(keysToExstracrt.includes(key as any)
          ? {}
          : { [key]: (obj as any)[key] }),
      }),
      {}
    )
