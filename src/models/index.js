import mongoose from 'mongoose'
import config from '../config'

const env = process.env.NODE_ENV
const { mongoUri } = config[env]

const connectDB = () => {

  /* use promise for mongoose */
  mongoose.Promise = global.Promise

  /* eslint-disable no-console */
  return mongoose.connect(mongoUri, {
    useMongoClient: true,
  }).then(() => console.log('connected to db!'))
  .catch(e => console.log(e))
  /* eslint-enable no-console */
}

export default connectDB
