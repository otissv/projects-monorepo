/**
 * Lazy evaluates a sequence of functions.
 *
 * @param   ...fns - Function to be executed in sequence.
 * @returns Returns a transformed value, where the previous functions output becomes the input of the next function.
 *
 * @method chain
 * @param  fn - Function to mapped on a value
 * @returns Returns a new chain.
 *
 *
 * @method exec
 * @param initialValue -  Initial value to passed to the reducer.
 *
 * @usage
 * `import \{ chain \} from "c-ufunc/libs/chain"`
 *
 * @example
 * ```
 * chain(toUpperCase).chain(toSnake).exec('hello world') // HELLO_WORLD
 * ```
 */
// eslint-disable-next-line functional/prefer-readonly-type
export const chain = <Fn extends Function>(...fns: Fn[]) => {
  const cache = fns

  const exec = <Value>(initialValue: Value) => {
    // eslint-disable-next-line functional/no-let
    let result: any = initialValue
    // eslint-disable-next-line functional/no-let
    // eslint-disable-next-line functional/no-loop-statement, functional/no-let
    for (let i = 0; i < cache.length; i++) {
      // eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
      result = cache[i](result)
    }

    return result
  }

  return {
    chain: <Fn extends Function>(fn: Fn) => {
      // eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
      cache.push(fn as any)

      return {
        chain,
        exec,
      }
    },
    exec,
  }
}
