const { Schema, model } = require("mongoose");
const Thought = require("./Thought");

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: "Please provide a username",
            trim: true
        },
        email: {
            type: String,
            required: "Please provide an email address",
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Please provide a valid email address"]
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: "Thought"
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)

userSchema.pre("findOneAndDelete", function (next) {
    const userId = this._conditions._id
    Thought.deleteMany({ userId }, function (err, result) {
        if (err) return console.log(err);
        console.log(result)
    })
    next()
});

userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;