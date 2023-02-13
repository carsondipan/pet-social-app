const { Schema, model, Types } = require('mongoose');
const { schema } = require('./Post');


const petSchema = new Schema (
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
        },
        petAvailable: {
            type: confirm,
            required: false,
        },
        petOwner: {
            type: Schema.Types.ObjectId,
            ref: "username",
        },
        //ID WILL REFERENCE USER ID AND AUTOINCREMENT IF YOU ALREADY HAVE ONE PET.
    });

    const Pet = model('Pet', petSchema);
    
    module.exports = Pet;