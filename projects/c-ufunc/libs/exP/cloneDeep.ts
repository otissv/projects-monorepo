/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/prefer-readonly-type */
/* eslint-disable functional/no-let */
/* eslint-disable functional/no-loop-statement */
/* eslint-disable functional/no-conditional-statement */
// not a good clone.

import { isString } from '../isString'
import { isNumber } from '../isNumber'
import { isFunction } from '../isFunction'
import { someTrue } from '../someTrue'
import { isNullOrUndefined } from '../isNullOrUndefined'
import { isError } from '../isError'
export const getType = <Value>(value: Value) =>
  (({} as Object).toString.call(value).slice(8, -1))

export const isArray = <Value>(value: Value): boolean => Array.isArray(value)
export const isWeakMap = <Value>(value: Value): boolean => Array.isArray(value)
export const isMap = <Value>(value: Value) =>
  value instanceof Date || getType(value) === 'Map'
export const isSet = <Value>(value: Value) =>
  value instanceof Date || getType(value) === 'Set'
export const isBoolean = <Value>(value: Value) => typeof value === 'boolean'
export const isDate = <Value>(value: Value) =>
  (value instanceof Date || getType(Date) === 'Date') &&
  !isNaN((value as Date).valueOf())

export const cloneDeep = <Value>(value: Value): Value => {
  switch (true) {
    case someTrue([
      isNullOrUndefined(value),
      isString(value),
      isNumber(value),
      isBoolean(value),
      isFunction(value),
      isError(value),
    ]): {
      return value
    }
    case isDate(value): {
      return new Date((value as Date).getTime()) as Value
    }
    case isMap(value): {
      const result = new Map<any, any>()
      for (const [key, val] of (value as Map<any, any>).entries()) {
        result.set(key, cloneDeep(val))
      }
      return result as Value
    }
    case isSet(value): {
      const result = new Set<any>()
      for (const val of (value as Set<any>).values()) {
        result.add(cloneDeep(val))
      }
      return result as Value
    }

    case isArray(value): {
      const result: any = []
      for (const val of (value as any[]).values()) {
        result.push(cloneDeep(val))
      }
      return result as Value
    }

    case typeof value === 'object': {
      const result: any = Array.isArray(value) ? [] : {}
      for (const key in value) {
        result[key as any] = cloneDeep(value[key])
      }
      return result as Value
    }

    default:
      return value
  }
}
