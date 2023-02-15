const { printIntrospectionSchema } = require('graphql');
const { Schema, model, Types } = require('mongoose');
const { schema } = require('./Post');

const petCountSchema = new Schema(
    {
        pets: {
            type: Number,
            default: 0,
        },
    },
);

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
        },
        pets: [petCountSchema],
        //ID WILL REFERENCE USER ID AND AUTOINCREMENT IF YOU ALREADY HAVE ONE PET.
        
    }
);

petCountSchema.virtual("petCount").get(function (){
    return this.length;
});

const Pet = model('Pet', petSchema);

module.exports = Pet;