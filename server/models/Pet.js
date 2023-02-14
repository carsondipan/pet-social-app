const { Schema, model, Types } = require('mongoose');
const { schema } = require('./Post');


const petSchema = new Schema(
    {
        petName: {
            type: String,
            unique: false,
            required: true,
        },
        petAge: {
            type: Number,
            required: false,
        },
        petType: {
            type: String,
            required: true,
        },
        petGender: {
            type: String,
            required: false,
        }
        //ID WILL REFERENCE USER ID AND AUTOINCREMENT IF YOU ALREADY HAVE ONE PET.
    });

const Pet = model('Pet', petSchema);

module.exports = Pet;