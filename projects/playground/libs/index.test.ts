/* eslint-plugin-disable functional */

import { sum } from './index'

describe('sum', () => {
  it('should sum two numbers', () => {
    expect(sum(1, 2)).toEqual(3)
  })
})
