import EventEmitter from 'events'

import { collection } from './index'

type ID = string | number | symbol

export class CollectionEmmiter extends EventEmitter {
  private collection = collection()
  subscriptions: ID[] = []

  broadcast() {
    for (const id of this.subscriptions) {
      this.emit(id as string, this.collection.get(id))
    }
  }
  publish(ids: ID[]) {
    for (const id of ids) {
      this.emit(id as string, this.collection.get(id))
    }
  }

  subscribe(ids: ID[]) {
    for (const id of ids) {
      this.on(id as string, () => {
        this.subscriptions.push(id)
      })
    }
  }

  unsubscribe(ids: ID[]) {
    for (const id of ids) {
      this.off(id as string, () => {
        this.subscriptions.push(id)
      })
    }
  }
}
