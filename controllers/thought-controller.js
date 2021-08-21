const { Thought } = require("../models")

const thoughtController = {
    getThoughts(req, res) {
        Thought.find({})
            .then(dbData => res.json(dbData))
            .catch(err => res.json(err))
    },
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
    addThought(req, res) {

    },
    updateThought(req, res) {

    },
    deleteThought(req, res) {

    },
    addReaction(req, res) {

    },
    deleteReaction(req, res) {

    }
}

module.exports = thoughtController