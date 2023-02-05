import { run } from 'probot'
import app from './index'

// eslint-disable-next-line functional/no-conditional-statement, functional/no-expression-statement, functional/immutable-data

// pass a probot app as a function
// eslint-disable-next-line functional/no-expression-statement
run(app)
