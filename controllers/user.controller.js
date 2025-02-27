const User = require('../models/user.model')

const getUser = (req,res) => {

    User.find().then((users) => {

        res.json(users)

        
    })

    .catch((err) => {

        res.status(400).json(err)

    })

   
    
}

const getUserById = (req,res) => {

    User.findById(req.params.id).then((user) => {

        res.json(user)

    })

    .catch((err) => {

        res.status(400).json(err)

    })

}

const createUser = (req,res) => {

    const user = new User({

        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    user.save().then(() => {

        res.json('User created')

    })

    .catch((err) => {

        res.status(400).json(err)

    })

}

const updateUser = (req,res) => {

    User.findById(req.params.id).then((user) => {

        user.name = req.body.name
        user.email = req.body.email
        user.password = req.body.password

        user.save().then(() => {

            res.json('user updated')

        })
    })

    .catch((err) => {

        res.status(400).json(err)

    })

}

const deleteUser = (req,res) => {

    User.findById(req.params.id).then((user) => {

        user.deleteOne().then(() => {

            res.json('user deleted')

        })

    })

    .catch((err) => {

        res.status(400).json(err)

    })

}

const UserController = {getUser,getUserById,createUser,updateUser,deleteUser}

module.exports = UserController