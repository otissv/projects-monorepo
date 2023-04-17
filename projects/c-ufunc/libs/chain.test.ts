/* eslint-plugin-disable functional */

import { chain } from './chain'

describe('chain', () => {
  it('should return execute chain', () => {
    const toUpperCase = (str: string) => str.toUpperCase()
    const toSnake = (str: string) => str.replace(' ', '_')
    expect(chain(toUpperCase).chain(toSnake).exec<string>('hello world')).toBe(
      'HELLO_WORLD'
    )
  })
})
