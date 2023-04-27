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
} from './data'

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
    // const entries = collection().add('id')([users[0], users[1], users[2]]).log()
    // // .entries()
    // entries
    // userEntries
    // expect(entries.exec()).toEqual(userEntries())
    // expect(entries.toArray()).toEqual(
    //   usersArrayMap().reduce(
    //     (acc: any[], user) => [...acc, [user.get('id'), user]],
    //     []
    //   )
    // )
    // expect(entries.toString(2)).toEqual(
    //   JSON.stringify(Object.entries(users), null, 2)
    // )
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

  it('has', () => {
    expect(collection().add('id')(users).has(0).exec()).toEqual(true)
    expect(collection().add('id')(users).has(3).exec()).toEqual(false)

    expect(collection().add('id')(users).has(0).toObject()).toEqual(users[0])
    expect(collection().add('id')(users).has(10).toObject()).toBe(undefined)

    expect(collection().add('id')(users).has(0).toString(2)).toEqual(
      JSON.stringify(users[0], null, 2)
    )
    expect(collection().add('id')(users).has(10).toString(2)).toEqual('')

    expect(
      collection().add('id')(users).has(0).get()?.value('username')
    ).toEqual('user0')
    expect(collection().add('id')(users).has(10).get()?.value('username')).toBe(
      undefined
    )
  })

  it('keys', () => {
    expect(collection().add('id')(users).keys().exec()).toEqual(userKeys())
    expect(
      collection()
        .add('id')(users)
        .keys()
        .toArray((x: number) => x + 1)
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
    const actaul = collection()
      .add('id')(users)
      .reduceRight((acc: string[], [key, value]) => [
        ...acc,
        `${key}_${value.get('username')}`,
      ])([])
      .exec()
    expect(actaul).toEqual(['2_user2', '1_user1', '0_user0'])
  })

  it('revserve', () => {
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

  // it('should sort collection', () => {
  //   const a = collection()
  //     .add('id')(users)
  //     .sort((a) => {
  //       console.log(a)
  //       return 1
  //     })
  //     .exec()
  //   a
  //   // console.log(a)
  //   // expect().toEqual(
  //   //   (() => {
  //   //     const map = new Map(usersMap())
  //   //     const sorted = new Map()
  //   //     map.forEach((value, key) => {
  //   //       sorted.set(key, value)
  //   //     })
  //   //     return sorted
  //   //   })()
  //   // )
  // })

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
    const coll1 = collection().add('id')(users).toArray()

    const coll2 = coll.toArray((item: Map<any, any>) => mapToObject()(item))

    console.log('coll1', coll1)
    console.log('coll2', coll2)

    const coll3 = coll
      .add('id')([
        {
          id: 3,
          username: 'user3',
          email: 'user0@example.com',
          age: 33,
          city: 'Rome',
        },
      ])
      .toArray()

    console.log('coll3', coll3)

    // expect(collection().toArray()).toEqual([])
    // expect(

    // ).toEqual(usersArrayMap())

    // coll.add('id')(users).toArray()

    // expect(coll.toArray((item: Map<any, any>) => mapToObject()(item))).toEqual(
    //   users
    // )
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

  it('concat', () => {
    const newProps = {
      country: 'Uninted Kingdom',
    }
    expect(
      collection()
        .add('id')(users)
        .get(0)
        .concat(new Map(Object.entries(newProps)))
        .exec()
    ).toEqual(new Map(Object.entries({ ...users[0], ...newProps })))
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
    expect(collection().add('id')(users).get(0).entries()).toEqual(
      new Map(Object.entries(users[0])).entries()
    )
  })

  it('forEach', () => {
    const actual: Record<string, any> = {}

    collection()
      .add('id')(users)
      .get(0)
      .forEach(([key, value]) => (actual[key as any] = value))

    expect(actual).toEqual(users[0])
  })

  it('has', () => {
    expect(collection().add('id')(users).get(1).has('username').exec()).toBe(
      true
    )
    expect(collection().add('id')(users).get(1).has('foo').exec()).toBe(false)
    expect(collection().add('id')(users).get(1).has('foo').get()).toBe(
      undefined
    )
    expect(
      collection().add('id')(users).get(0).has('username').get()?.exec()
    ).toEqual(new Map(Object.entries(users[0])))
  })

  it('keys', () => {
    expect(collection().add('id')(users).get(0).keys()).toEqual(
      new Map(Object.entries(users[0])).keys()
    )
    expect(collection().add('id')(users).get(10).keys()).toEqual(
      new Map().entries()
    )
  })

  it('map', () => {
    expect(
      collection()
        .add('id')(users)
        .get(0)
        .map(([key, value]) => [key, value])
    ).toEqual(Object.entries(users[0]))
  })

  it('reduce', () => {
    expect(
      collection()
        .add('id')(users)
        .get(0)
        .reduce((acc: string[], [_key, value]) => [...acc, value])([])
    ).toEqual([0, 'user0', 'user0@example.com', 33, 'London'])
  })

  it('reduceRight', () => {
    expect(
      collection()
        .add('id')(users)
        .get(0)
        .reduceRight((acc: string[], [_key, value]) => [...acc, value])([])
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
    expect(collection().add('id')(users).get(0).size()).toEqual(5)
    expect(collection().add('id')(users).get(10).size()).toEqual(0)
  })

  it('value', () => {
    expect(collection().add('id')(users).get(0).value('username')).toBe('user0')
    expect(collection().add('id')(users).get(10).value('username')).toBe(
      undefined
    )
  })

  it('values', () => {
    expect(collection().add('id')(users).get(0).values()).toEqual(
      new Map(Object.entries(users[0])).values()
    )
    expect(collection().add('id')(users).get(10).values()).toEqual(
      new Map().values()
    )
  })

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