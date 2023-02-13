const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
    {
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'comment',

            }
        ],
        commentId: {
            type: Number,
            required: true,
            default: 'newObjId'
        },
        commentBody: {
            type: string,
            required: true,
            maxlength: 144,
        },
        username: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'username',
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
    },
)