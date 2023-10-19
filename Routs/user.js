const express = require('express')
//const Workout = require('../models/workoutModel')
const {
    loginUser,signUpUser
} = require('../controllers/UserControllers')

const router = express.Router()

router.post('/login', loginUser)

router.post('/signup', signUpUser)




module.exports = router