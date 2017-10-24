import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const { Schema } = mongoose

const User = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  social: {
    naver: {
      access_token: String,
      id: String,
      displayName: String,
    },
    facebook: {
      access_token: String,
      id: String,
      displayName: String,
    }
  }
})

User.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

User.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

export default mongoose.model('User', User)
