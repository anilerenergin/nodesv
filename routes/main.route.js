const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("<h1>Welcome to my first api</h1> </br> <p>/signin for adding loggin in</p></br><p>/signup for adding user to db</p></br><p>/all for all users</p></br><p>/all/$id for deleting users</p> ")
})

module.exports = router