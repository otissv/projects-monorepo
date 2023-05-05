/* eslint-plugin-disable functional */

import { collection } from './index'
import { mapToObject } from './utils'
import {
  users,
  usersObject,
  usersMap,
  usersArrayMap,
  userKeys,
  userValues,
  usersReverse,
  userEntries,
} from './data'

//TODO: make sure all methods with { exec, toObject, toString, toArray } are tested
//TODO: make sure all methods with { exec, toObject, toString, toArray } have log
describe('collection', () => {
  it('add', () => {
    expect(collection().add('id')(users).exec()).toEqual(usersMap())
    expect(collection().add('id')(JSON.stringify(users)).exec()).toEqual(
      usersMap()
    )
    expect(
      collection().add('id')([users[0], users[1], users[2]]).exec()
    ).toEqual(usersMap())
  })

  it('clear', () => {
    expect(collection().add('id')(users).clear().exec()).toEqual(new Map())
  })

  it('delete', () => {
    const actual = collection().add('id')(users).delete(0).exec()
    const expected = () => {
      const map = new Map(usersMap())
      map.delete(0)
      return map
    }
    expect(actual).toEqual(expected())
  })

  it('entries', () => {
    const entries = collection()
      .add('id')([users[0], users[1], users[2]])
      .entries()

    expect(entries.exec()).toEqual(userEntries())
    expect(entries.toArray()).toEqual(
      usersArrayMap().reduce(
        (acc: any[], user) => [...acc, [user.get('id'), user]],
        []
      )
    )
    expect(entries.toString(2)).toEqual(
      JSON.stringify(Object.entries(users), null, 2)
    )
  })

  it('filter', () => {
    expect(
      collection()
        .add('id')(users)
        .filter(([_key, value]) => value.get('age') > 30)
        .exec()
    ).toEqual(
      new Map([
        [0, new Map(Object.entries(users[0]))],
        [2, new Map(Object.entries(users[2]))],
      ])
    )
    expect(
      collection()
        .add('id')(users)
        .filter(([_key, value]) => value.get('age') > 100)
        .exec()
    ).toEqual(new Map())
  })

  it('find', () => {
    expect(
      collection()
        .add('id')(users)
        .find(([_key, value]) => value.get('age') > 30)
        .exec()
    ).toEqual(new Map(Object.entries(users[0])))
    expect(
      collection()
        .add('id')(users)
        .find(([_key, value]) => value.get('age') > 100)
        .exec()
    ).toEqual(new Map())
  })

  it('forEach', () => {
    const actual = collection()
      .add('id')(users)
      .forEach(([_key, value]) => {
        value.set('age', value.get('age') + 1)
      })
    const expected = () => {
      const map = new Map(usersMap())
      map.forEach((value) => {
        value.set('age', value.get('age') + 1)
      })
      return map
    }
    expect(actual.exec()).toEqual(expected())
  })

  it('get', () => {
    expect(collection().add('id')(users).get(0).exec()).toEqual(
      new Map(Object.entries(users[0]))
    )
    expect(collection().add('id')(users).get(10).exec()).toEqual(new Map())
  })

  it('has', () => {
    expect(collection().add('id')(users).has(0).exec()).toEqual(true)
    expect(collection().add('id')(users).has(3).exec()).toEqual(false)

    expect(collection().add('id')(users).has(0).toObject()).toEqual(users[0])
    expect(collection().add('id')(users).has(10).toObject()).toEqual({})

    expect(collection().add('id')(users).has(0).toString(2)).toEqual(
      JSON.stringify(users[0], null, 2)
    )
    expect(collection().add('id')(users).has(10).toString(2)).toEqual('')

    expect(
      collection().add('id')(users).has(0).get().value('username')
    ).toEqual('user0')
    expect(collection().add('id')(users).has(10).get().value('username')).toBe(
      undefined
    )
    expect(collection().add('id')(users).has(0).get().exec()).toEqual(
      usersMap().get(0)
    )
  })

  it('keys', () => {
    expect(collection().add('id')(users).keys().exec()).toEqual(userKeys())
    expect(
      collection()
        .add('id')(users)
        .keys()
        .toArray((x) => (x as number) + 1)
    ).toEqual([1, 2, 3])
    expect(collection().add('id')(users).keys().toString(2)).toEqual(
      JSON.stringify([0, 1, 2], null, 2)
    )
  })

  it('map', () => {
    expect(
      collection()
        .add('id')(users)
        .map(([key, value]) => [key, value.get('username')])
        .exec()
    ).toEqual([
      [0, 'user0'],
      [1, 'user1'],
      [2, 'user2'],
    ])
  })

  it('merge', () => {
    expect(
      collection()
        .add('id')(users)
        .merge(collection().add('id')(users).exec())
        .exec()
    ).toEqual(
      (() => {
        const map = new Map(usersMap())
        for (const [key, value] of usersMap()) {
          map.set(key, value)
        }
        return map
      })()
    )
    const newUser = {
      id: 3,
      username: 'user3',
      email: 'user0@example.com',
      age: 33,
      city: 'Rome',
    }

    expect(
      collection()
        .add('id')(users)
        .merge(
          collection()
            .add('id')([...users, newUser])
            .exec()
        )
        .exec()
    ).toEqual(
      (() => {
        const map = new Map(usersMap())
        for (const [key, value] of usersMap()) {
          map.set(key, value)
        }
        map.set(newUser.id, new Map(Object.entries(newUser)))
        return map
      })()
    )
  })

  it('reduce', () => {
    expect(
      collection()
        .add('id')(users)
        .reduce((acc: string[], [_key, value]) => [
          ...acc,
          value.get('username'),
        ])([])
        .exec()
    ).toEqual(['user0', 'user1', 'user2'])

    expect(
      collection()
        .add('id')(users)
        .reduce((acc: Record<string, any>, [_key, value]) => ({
          ...acc,
          [value.get('id')]: value.get('username'),
        }))({})
        .exec()
    ).toEqual({ 0: 'user0', 1: 'user1', 2: 'user2' })
  })

  it('reduceRight', () => {
    const actual = collection()
      .add('id')(users)
      .reduceRight((acc: string[], [key, value]) => [
        ...acc,
        `${String(key)}_${value.get('username')}`,
      ])([])
      .exec()
    expect(actual).toEqual(['2_user2', '1_user1', '0_user0'])
  })

  it('reserve', () => {
    expect(collection().add('id')(users).reverse().exec()).toEqual(
      usersReverse()
    )
  })

  it('set', () => {
    const actual = collection()
      .add('id')(users)
      .set([0, { username: 0 }])
      .exec()

    const expected = () => {
      const map = new Map(usersMap())
      map.set(0, new Map(Object.entries({ username: 0 })))

      return map
    }

    expect(actual).toEqual(expected())
  })

  it('size', () => {
    expect(collection().size().exec()).toEqual(0)
    expect(collection().add('id')(users).size().exec()).toEqual(3)
  })

  it('update', () => {
    expect(
      collection()
        .add('id')(users)
        .update([0, { username: 'user0_updated' }])
        .exec()
    ).toEqual(
      (() => {
        const map = new Map(usersMap())
        map.set(
          0,
          new Map([
            ...map.get(0),
            ...Object.entries({ username: 'user0_updated' }),
          ])
        )
        return map
      })()
    )

    expect(
      collection()
        .add('id')(users)
        .update([10, { username: 'user0_updated' }])
        .exec()
    ).toEqual(collection().add('id')(users).exec())
  })

  it('values', () => {
    expect(collection().add('id')(users).values().exec()).toEqual(userValues())
    expect(collection().add('id')(users).values().toArray()).toEqual(
      usersArrayMap()
    )
    expect(
      collection().add('id')(users).values().toArray(mapToObject())
    ).toEqual(users)
    expect(collection().add('id')(users).values().toString(2)).toEqual(
      JSON.stringify(users, null, 2)
    )
  })

  it('toArray', () => {
    const coll = collection().add('id')(users)

    expect(collection().toArray()).toEqual([])
    expect(coll.toArray(([_id, item]) => mapToObject()(item))).toEqual(users)

    const newUser = {
      id: 3,
      username: 'user3',
      email: 'user0@example.com',
      age: 33,
      city: 'Rome',
    }

    expect(coll.add('id')([newUser]).toArray()).toEqual(
      usersArrayMap([newUser])
    )
  })

  it('toObject', () => {
    expect(collection().add('id')(users).toObject()).toEqual(usersObject)
  })

  it('toString', () => {
    expect(collection().add('id')(users).toString(2)).toEqual(
      JSON.stringify(users, null, 2)
    )
  })
})

describe('collection item', () => {
  it('clear', () => {
    expect(collection().add('id')(users).get(0).clear().exec()).toEqual(
      new Map()
    )
  })

  it('delete', () => {
    expect(collection().add('id')(users).get(0).delete('email').exec()).toEqual(
      (() => {
        const map = new Map(Object.entries(users[0]))
        map.delete('email')
        return map
      })()
    )
  })

  it('entries', () => {
    const userEntries = [
      ['id', 0],
      ['username', 'user0'],
      ['email', 'user0@example.com'],
      ['age', 33],
      ['city', 'London'],
    ]
    const entries = collection().add('id')([users[0]]).get(0).entries()

    expect(entries.exec()).toEqual(new Map(userEntries as any).entries())
    expect(entries.toArray()).toEqual(userEntries)

    console.log(entries.toString(2))
    // expect(entries.toString(2)).toEqual(JSON.stringify(userEntries, null, 2))
  })

  it('forEach', () => {
    const fn = jest.fn()

    const actual = collection().add('id')(users).get(0).forEach(fn).exec()
    expect(actual).toEqual(usersMap().get(0))

    expect(fn).toBeCalledTimes(5)
    expect(fn).toBeCalledWith(['id', 0])
    expect(fn).toBeCalledWith(['username', 'user0'])
    expect(fn).toBeCalledWith(['email', 'user0@example.com'])
    expect(fn).toBeCalledWith(['age', 33])
    expect(fn).toBeCalledWith(['city', 'London'])
  })

  it('has', () => {
    expect(collection().add('id')(users).get(1).has('username').exec()).toBe(
      true
    )
    expect(collection().add('id')(users).get(1).has('foo').exec()).toBe(false)
    expect(
      collection().add('id')(users).get(1).has('foo').get().exec()
    ).toEqual(new Map())
    expect(
      collection().add('id')(users).get(0).has('username').get().exec()
    ).toEqual(new Map(Object.entries(users[0])))
    expect(
      collection().add('id')(users).get(10).has('username').get().exec()
    ).toEqual(new Map())

    expect(
      collection().add('id')(users).get(0).has('username').toObject()
    ).toEqual(users[0])
    expect(collection().add('id')(users).get(0).has('foo').toObject()).toEqual(
      {}
    )

    expect(
      collection().add('id')(users).get(0).has('username').toString(2)
    ).toEqual(JSON.stringify(users[0], null, 2))
    expect(collection().add('id')(users).get(0).has('foo').toString(2)).toEqual(
      ''
    )
  })

  it('keys', () => {
    expect(collection().add('id')(users).get(0).keys().exec()).toEqual(
      new Map(Object.entries(users[0])).keys()
    )
    expect(collection().add('id')(users).get(10).keys().exec()).toEqual(
      new Map().entries()
    )
  })

  it('map', () => {
    expect(
      collection()
        .add('id')(users)
        .get(0)
        .map(([key, value]) => [key, value])
        .exec()
    ).toEqual(Object.entries(users[0]))
  })

  it('merge', () => {
    const newProps = {
      country: 'United Kingdom',
    }
    expect(
      collection()
        .add('id')(users)
        .get(0)
        .merge(new Map(Object.entries(newProps)))
        .exec()
    ).toEqual(new Map(Object.entries({ ...users[0], ...newProps })))
  })

  it('reduce', () => {
    expect(
      collection()
        .add('id')(users)
        .get(0)
        .reduce((acc: string[], [_key, value]) => [...acc, value])([])
        .exec()
    ).toEqual([0, 'user0', 'user0@example.com', 33, 'London'])
  })

  it('reduceRight', () => {
    expect(
      collection()
        .add('id')(users)
        .get(0)
        .reduceRight((acc: string[], [_key, value]) => [...acc, value])([])
        .exec()
    ).toEqual(['London', 33, 'user0@example.com', 'user0', 0])
  })

  it('reverse', () => {
    const obj = { id: 0, 1: 1, 2: 2, 3: 3 }

    expect(collection().add('id')([obj]).get(0).reverse().exec()).toEqual(
      new Map([...Object.entries(obj)].reverse())
    )
  })

  it('set', () => {
    expect(
      collection().add('id')(users).get(0).set(['username', 'otis']).exec()
    ).toEqual(new Map(Object.entries({ ...users[0], username: 'otis' })))
    expect(
      collection().add('id')(users).get(0).set(['name', 'otis']).exec()
    ).toEqual(new Map(Object.entries({ ...users[0], name: 'otis' })))
  })

  it('should set item', () => {
    expect(collection().add('id')(users).get(0).size().exec()).toEqual(5)
    expect(collection().add('id')(users).get(10).size().exec()).toEqual(0)
  })

  it('value', () => {
    expect(collection().add('id')(users).get(0).value('username')).toBe('user0')
    expect(collection().add('id')(users).get(10).value('username')).toBe(
      undefined
    )
  })

  it('values', () => {
    expect(collection().add('id')(users).get(0).values().exec()).toEqual(
      new Map(Object.entries(users[0])).values()
    )
    expect(collection().add('id')(users).get(10).values().exec()).toEqual(
      new Map().values()
    )
  })
  userValues

  it('toArray', () => {
    expect(collection().add('id')(users).get(0).toArray()).toEqual([
      0,
      'user0',
      'user0@example.com',
      33,
      'London',
    ])
    expect(collection().add('id')(users).get(10).toArray()).toEqual([])
  })

  it('toObject', () => {
    expect(collection().add('id')(users).get(0).toObject()).toEqual(users[0])
    expect(collection().add('id')(users).get(10).toObject()).toEqual({})
  })

  it('toString', () => {
    expect(collection().add('id')(users).get(0).toString(2)).toEqual(
      JSON.stringify(users[0], null, 2)
    )
    expect(collection().add('id')(users).get(10).toString(2)).toEqual('{}')
  })
})
