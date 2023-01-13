const express = require('express')
const User = require('../models/user.model')
const router = express.Router()


router.post('/signup', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            console.log(err)
            res.json(err)
        } else {
            if (user == null) {
                const user = User({
                    email: req.body.email,
                    password: req.body.password
                })
                user.save()
                    .then((err) => {
                        if (err) {
                            console.log(err)
                            res.json(err)
                        } else {
                            console.log(user)
                            res.json(user)
                        }

                    })
            } else {

                res.json({
                    message: 'email is not avilable'
                })
            }
        }
    })

})

router.post('/signin', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (user != null && req.body.password == user.password) {
            if (err) {
                console.log(err)
                res.json(err)
            } else {
                res.json(user)
            }
        }
        else {
            res.status(500).send()
        }
    })
})
router.get('/all', (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            console.log(err)
            res.json(err)
        } else {
            res.json(user)
            res.send(user.email)
        }
    })
})


router.delete('/all/:id', (req, res) => {
    User.findByIdAndDelete({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(204).send();
        }
    });
});


module.exports = router