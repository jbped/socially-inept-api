const { Thought, User } = require("../models")

const thoughtController = {
    // GET ALL THOUGHTS
    getThoughts(req, res) {
        Thought.find({})
            .then(dbData => res.json(dbData))
            .catch(err => res.json(err))
    },
    // GET ONE THOUGHT BY THOUGHT ID
    getOneThought({ params }, res) {
        Thought.findById(params.id)
            .then(dbData => {
                if(!dbData) {
                    res.status(400).json({ message: "No thoughts were found with the provided ID" })
                    return;
                }
                res.json(dbData);
            })
            .catch(err => res.json(err))
    },
    // POST NEW THOUGHT
    // Expected JSON
    // {
    //   "thoughtText": "I'm surprised I have a coherent thought!",
    //   "username": "unoriginalUsername",
    //   "userId": "5edff358a0fcb779aa7b118b"
    // }
    addThought({ body }, res) {
        Thought.create(body)
            .then(thoughtData => {
                return User.findByIdAndUpdate(
                    thoughtData.userId, 
                    { $push: { thoughts: thoughtData._id } },
                    { new: true, runValidators: true }
                )
            })
            .then(dbData => res.json(dbData))
            .catch(err => res.json(err))
    },
    // PUT UPDATE THOUGHT BY THOUGHT ID
    // Expected JSON
    // {
    //   "thoughtText": "I'm surprised I have a coherent through running through my head!",
    //   "username": "unoriginalUsername",
    //   "userId": "5edff358a0fcb779aa7b118b"
    // }
    updateThought(req, res) {
        Thought.findByIdAndUpdate(req.params.id, body, { new: true })
            .then(dbData => {
                if(!dbData) {
                    res.status(400).json({ message: "No thoughts were found with the provided ID" })
                    return;
                }
                res.json(dbData);
            })
            .catch(err => res.json(err))
    },
    // DELETE THOUGHT BY THOUGHT ID
    deleteThought(req, res) {
        Thought.findByIdAndDelete(req.params.id)
            .then(dbData => {
                if(!dbData) {
                    res.status(400).json({ message: "No thoughts were found with the provided ID" })
                    return;
                }
                return User.findByIdAndUpdate(
                    dbData.userId,
                    { $pull: { thoughts: req.params.id } },
                    { new: true }
                )
            })
            .catch(err => res.json(err))
    },
    // ADD REACTION TO THOUGHT BY THOUGHT ID
    addReaction(req, res) {
        Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $push: { reactions: req.body } },
            { new: true, runValidators: true }
        )
            .then(dbData => {
                if(!dbData) {
                    res.status(400).json({ message: "No thoughts were found with the provided ID" })
                    return;
                }
                res.json(dbData)
            })
            .catch(err => res.json(err))
    },
    // ADD THOUGHT BY THOUGHT ID AND REACTION ID
    deleteReaction({ params }, res) {
        Thought.findByIdAndDelete(
            params.thoughtId,
            { $pull: { reactions: params.reactionId } },
            { new: true, runValidators:true }
        )
        .then(dbData => {
            if(!dbData) {
                res.status(400).json({ message: "No thoughts were found with the provided ID" })
                return;
            }
            res.json(dbData)
        })
        .catch(err => res.json(err))
    }
}

module.exports = thoughtController