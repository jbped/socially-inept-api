const { Schema, model, Types } = require("mongoose");

const reactionSchema = new Schema(
    {
        reactionId: {},
        reactionBody: {},
        username: {},
        createdAt: {}
    },
    {
        toJson: {
            getters: true
        }
    }
)

const thoughtSchema = new Schema(
    {
        thoughtText: {},
        createdAt: {
            type: Date
        },
        username: {},
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
)

thoughtSchema.virtual("reactionCount").get(function(){

})

const Thought = model ("Thought", thoughtSchema);

module.exports = Thought;