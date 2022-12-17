import React from 'react'

import { useFetchEffect, useSubscribe } from '../../react/hooks'
import { useStore } from '../../react/StoreContext'
import { State } from '../stateSetters'

function UserCount({ count }: { count: number }) {
  return <div>{count}</div>
}

function UsersList({ users = [] }: { users: State['users'] }) {
  return (
    <>
      {users.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </>
  )
}

export function Users() {
  const [users, setUsers] = useSubscribe(useStore(), 'users').value<
    State['users'],
    State
  >()

  function replaceUsers(resultP: () => Promise<any>) {
    resultP()
      .then((data) =>
        setUsers(
          () =>
            ({
              users: data,
            } as any)
        )
      )
      .catch(console.log)
  }

  useFetchEffect(
    {
      url: 'https://jsonplaceholder.typicode.com/users',
    },
    replaceUsers
  )

  return (
    <div>
      <h2>Users</h2>
      <UserCount count={users.length} />
      <UsersList users={users} />
    </div>
  )
}
