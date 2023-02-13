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

const postSchema = new Schema(
    {
        postText: {
            type: String,
            unique: true,
            required: "post or we riot!",
            minlength: 1,
            maxlength: 280,
            trim: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
        username: {
            type: String,
            required: true,
        },
        likes: [likeSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

postSchema.virtual("likeCount").get(function () {
    return this.length;
});

const Post = model('post', postSchema);

module.exports = Post;