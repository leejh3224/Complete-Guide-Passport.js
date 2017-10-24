import session from 'express-session'
import redis from 'redis'
import config from './config'

const env = process.env.NODE_ENV
const { host, redis_conf } = config[env]

const RedisStore = require('connect-redis')(session)
const client = redis.createClient(redis_conf.port, host)

// use store to delete session for logout route
export const store = new RedisStore({
  client,
  prefix: 'session:',
  db: redis_conf.db,
})

const sess = {
  store,
  secret: 'session-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {

    // if true, deserialize user will never be called
    secure: false,
    httpOnly: true,

    // 10 hrs duration
    maxAge: 1000 * 60 * 60 * 10,
  }
}

export default sess
