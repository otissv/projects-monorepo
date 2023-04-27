/* eslint-disable functional/immutable-data */
export const users = [
  {
    id: 0,
    username: 'user0',
    email: 'user0@example.com',
    age: 33,
    city: 'London',
  },
  {
    id: 1,
    username: 'user1',
    email: 'user1@example.com',
    age: 25,
    city: 'New York',
  },
  {
    id: 2,
    username: 'user2',
    email: 'user2@example.com',
    age: 66,
    city: 'Paris',
  },
]

export const usersObject = {
  0: users[0],
  1: users[1],
  2: users[2],
}

export const usersMap = () =>
  users.reduce(
    (map, user) => map.set(user.id, new Map(Object.entries(user))),
    new Map()
  )

export const usersArrayMap = () =>
  users.map((user) => new Map(Object.entries(user)))

export const userEntries = () => usersMap().entries()

export const userKeys = () => usersMap().keys()

export const userValues = () => usersMap().values()

export const usersReverse = () => {
  return new Map([...usersMap()].reverse())
}
