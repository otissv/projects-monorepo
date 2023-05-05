import { toString } from './toString'

describe('toString', () => {
  it('should convert a primitives to a string', () => {
    expect(toString()()(undefined)).toBe('""')
    expect(toString()()(null)).toBe('null')
    expect(toString()()(NaN)).toBe('null')
    expect(toString()()(true)).toBe('true')
    expect(toString()()(false)).toBe('false')
    expect(toString()()(0)).toBe('0')
    expect(toString()()(1)).toBe('1')
    expect(toString()()(-1)).toBe('-1')
    expect(toString()()(Infinity)).toBe('null')
    expect(toString()()(-Infinity)).toBe('null')
  })

  it('should convert a array to a string', () => {
    expect(toString()()([])).toBe('[]')
    console.log(
      toString()(2)([new Map([[0, 'amap']]), { a: 'a' }, 2, 'a']),
      new Date('2023/1/1'),
      new Set(['a', 'b', 'c'])
    )
  })

  it('should convert a value to a string with indentation', () => {
    // expect(toString()()(true)).toBe('true')
  })
})
