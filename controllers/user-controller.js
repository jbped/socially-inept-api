const { User } = require("../models")

const userController = {
    getUsers(req, res) {
        User.find({})
            .populate("thoughts")
            .populate("friends")
            .then(dbData => res.json(dbData))
            .catch(err => res.json(err))
    },
    getOneUser({ params }, res) {
        User.findById(params.id)
            .populate("thoughts")
            .populate("friends")
            .then(dbData => {
                if(!dbData) {
                    res.status(400).json({ message: "No users found with provided ID" })
                    return;
                }
                res.json(dbData);
            })
            .catch(err => res.json(err))
    },
    addUser({ body }, res) {
        User.create(body)
            .then(dbData => res.json(dbData))
            .catch(err => res.json(err))
    },
    updateUser(req, res) {

    },
    deleteUser(req, res) {

    },
    addFriend(req, res) {

    },
    deleteFriend(req, res) {

    },
}

module.exports = userController