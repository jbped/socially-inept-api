const { User } = require("../models")

const userController = {
    // GET ALL USERS
    getUsers(req, res) {
        User.find({})
            .populate({
                path: "thoughts",
                select: "-__v -username -userId -id"
            })
            // .populate({
            //     path: "friends",
            //     select: "_id username"
            // })
            .then(dbData => res.json(dbData))
            .catch(err => res.json(err))
    },
    // GET ONE USER BY USER ID
    getOneUser({ params }, res) {
        User.findById(params.id)
            .populate({
                path: "thoughts",
                select: "-__v -username -userId -id"
            })
            // .populate({
            //     path: "friends",
            //     select: "_id username"
            // })
            .then(dbData => {
                if(!dbData) {
                    res.status(400).json({ message: "No users found with provided ID" })
                    return;
                }
                res.json(dbData);
            })
            .catch(err => res.json(err))
    },
    // POST NEW USER
    // Expected JSON
    // {
    //      "username": "usernameHere",
    //      "email": "test@email.com"
    // }
    addUser({ body }, res) {
        User.create(body)
            .then(dbData => res.json(dbData))
            .catch(err => res.json(err))
    },
    // PUT UPDATE USER BY USER ID
    // Expected JSON
    // {
    //      "username": "usernameHere",
    //      "email": "test@email.com"
    // }
    updateUser(req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, { new:true })
            .then(dbData => {
                if(!dbData) {
                    res.status(400).json({ message: "No users found with provided ID" })
                    return;
                }
                res.json(dbData);
            })
            .catch(err => res.json(err))
    },
    // DELETE USER BY USER ID
    deleteUser(req, res) {
        User.findByIdAndDelete(req.params.id)
            .then(dbData => {
                if(!dbData) {
                    res.status(400).json({ message: "No users found with provided ID" })
                    return;
                }
                
                res.json(dbData);
            })
            .catch(err => res.json(err))
    },
    // ADD NEW FRIEND BY USER ID
    addFriend(req, res) {
        User.findById(req.params.friendId)
            .then(({ _id }) => {
                return User.findByIdAndUpdate(
                req.params.userId,
                { $push: { friends: _id } },
                { new:true }
                )
            })
            .then(dbData => {
                if(!dbData) {
                    res.status(400).json({ message: "No users found with provided ID" })
                    return;
                }
                res.json(dbData);
            })
            .catch(err => res.json(err))
    },
    // DELETE FRIEND
    deleteFriend(req, res) {
        User.findById(req.params.friendId)
        .then(({ _id }) => {
            return User.findByIdAndUpdate(
            req.params.userId,
            { $pull: { friends: _id } },
            { new:true }
            )
        })
        .then(dbData => {
            if(!dbData) {
                res.status(400).json({ message: "No users found with provided ID" })
                return;
            }
            res.json(dbData);
        })
        .catch(err => res.json(err))
    },
}

module.exports = userController;