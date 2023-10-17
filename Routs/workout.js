const express = require('express')
const Workout = require('../models/workoutModel')
const {
    createWorkout,getWorkout,getWorkoutById,DeleteById,UpdateByid
} = require('../controllers/Controllers')

const router = express.Router()

router.get('/', getWorkout)

router.get('/:id', getWorkoutById)

router.post('/', createWorkout)

router.delete('/:id', DeleteById)

router.patch('/:id', UpdateByid)



module.exports = router