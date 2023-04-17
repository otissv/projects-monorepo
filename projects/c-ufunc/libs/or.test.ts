/* eslint-plugin-disable functional */
import { or } from './or'

describe('or', () => {
  it('should', () => {
    expect(
      or((a: number) => a === 5 && 'Fizz')
        .or((a: number) => a === 3 && 'Buzz')
        .exec(5)
    ).toBe('Fizz')

    expect(
      or((a: number) => a === 5 && 'Fizz')
        .or((a: number) => a === 3 && 'Buzz')
        .exec(3)
    ).toBe('Buzz')
  })
})
