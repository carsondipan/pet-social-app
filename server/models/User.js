const { Schema, model, Types } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: "Thought",
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: "User",
    }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Provided with Anthony's boilerplate - need to test
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// userSchema.virtual("friendCount").get(function () {
//   return this.friends.length;
// });

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;