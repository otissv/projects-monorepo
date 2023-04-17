/**
 * Omits keys from an object.
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
  <Obj extends Record<any, any>>(obj: Obj) => {
    const newObj: Partial<Obj> = {}

    // eslint-disable-next-line functional/no-loop-statement
    for (const key in obj) {
      // eslint-disable-next-line functional/no-conditional-statement
      if (!keysToExstracrt.includes(key)) {
        // eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
        ;(newObj as any)[key] = obj[key]
      }
    }

    return newObj
  }
