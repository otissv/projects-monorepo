import fetch from 'node-fetch'
// import { expectToMatchSchema } from 'jest-json-schema-extended'

import { config } from '../config'
import '../main'
// import { settingsSchema } from './schema'

const { appName, host, port } = config()

describe('Server e2e', () => {
  it('should start server', async () => {
    const result = await fetch(`http://${host}:${port}/${appName}`).then(
      (response) => response.json()
    )

    expect(result).toEqual({ success: 'ok' })
  })

  it('should gett settings', async () => {
    const route = 'settings'
    const body = {
      owner: 'otissv',
      repo: 'otissv-test-repo',
    }
    const result = await fetch(`http://${host}:${port}/${appName}/${route}`, {
      method: 'POST',
      body: JSON.stringify(body),
    }).then((response) => response.json())

    console.log(result)

    // expectToMatchSchema(result., settingsSchema)
  })
})
