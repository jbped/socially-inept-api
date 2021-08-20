const { Schema, model, Types } = require("mongoose");
const formatDate = require("../utils/getters")

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: "Please provide some text for the body of your Reaction.",
            max: [280, "A maximum of 280 characters are allowed"]
        },
        username: {
            type: String, 
            required: "Please provide a username"
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: value => formatDate(value)
        }
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
            required: "Please provide a sacrificial body for your thought -- er, um, I uh... I mean a body of text.",
            min: [1, "A minimum of one character is required"],
            max: [280, "A maximum of 280 characters are allowed"]
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: value => formatDate(value)
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