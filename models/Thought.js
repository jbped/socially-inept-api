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
        thoughtText: {
            type: String,
            required: "Please provide a sacrificial body for your thought -- I mean a body of text.",
            min: [1, "A minimum of one character is required"],
            max: [280, "A maximum of 280 characters are allowed"]
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: "Please provide a username"
        },
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
    return this.reactions.length;
})

const Thought = model ("Thought", thoughtSchema);

module.exports = Thought;