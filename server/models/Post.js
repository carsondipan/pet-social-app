const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const likeSchema = new Schema(
    {
        like: {
            type: Number,
            default: 0,
        },
    },
);

const postSchema = new Schema({
    postText: {
        type: String,
        unique: true,
        required: "post or we riot!",
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    postAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
        {
          commentText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
          },
          commentAuthor: {
            type: String,
            required: true,
          },
          createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
          },
        },
      ],
    });

postSchema.virtual("likeCount").get(function () {
    return this.length;
});

const Post = model('Post', postSchema);

module.exports = Post;