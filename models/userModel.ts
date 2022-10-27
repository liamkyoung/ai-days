import mongoose, { Schema, model, models, Mongoose } from 'mongoose'

const userSchema: mongoose.Schema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  workSpaces: {
    type: [Number],
  },
})

const User = models.User || model('User', userSchema)

export default User
