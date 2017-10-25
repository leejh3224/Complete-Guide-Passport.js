import { config as dotenv } from 'dotenv'

// get env variables
dotenv()

const config = {
  development: {
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGO_URI,
    redis_conf: {
      port: 6379,
      db: 0,
    },
    naver: {
      clientID: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
      callbackURL: '/user/naver/callback',
    },
    facebook: {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: '/user/facebook/callback',
    },
  }, 
  production: {
    host: process.env.HOST || 'http://hanbitglasses.com',
    port: process.env.PORT || 8080,
    mongoUri: process.env.MONGO_URI,
    redis_conf: {
      port: 6379,
      db: 1,
    },
    naver: {
      clientID: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
      callbackURL: '/user/naver/callback',
    },
    facebook: {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: '/user/facebook/callback',
    },
  }
}

export default config
