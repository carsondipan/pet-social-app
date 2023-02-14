const { Schema, model, Types } = require('mongoose');


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
    numberOfPets: {
      type: Number,
      required: true,
    },
    Location: {
      type: String,
      required: true,
    },
    // listPets: {
    //   [
    //       type: String,
          
    //   ],
    // },
    // petImage: {
    //   type: String,
    //   ref: ""
    // },
  }
);

const User = model('User', userSchema);

module.exports = User;
