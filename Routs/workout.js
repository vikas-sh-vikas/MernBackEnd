const express = require('express')
const Workout = require('../models/workoutModel')
const {
    createWorkout,getWorkout,getWorkoutById,DeleteById,UpdateByid
} = require('../controllers/Controllers')


const requireAuth = require('../middleware/riquireauth')
 


const router = express.Router()

router.use(requireAuth)

router.get('/', getWorkout)

router.get('/:id', getWorkoutById)

router.post('/', createWorkout)

router.delete('/:id', DeleteById)

router.patch('/:id', UpdateByid)



module.exports = router