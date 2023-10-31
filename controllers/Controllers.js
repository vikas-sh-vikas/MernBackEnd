const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//get all worksout
const getWorkout = async(req,res) => {
    const user_id = req.user._id
    const workout = await Workout.find({user_id}).sort({createdAt: -1})
    res.status(200).json(workout)
}
// get a single workout
const getWorkoutById = async(req,res) => {
    const {id} = req.params 
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "Not Such Workout"})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return req.status(404).json({error : 'No such workout'})
    }

    res.status(200).json(workout)
}
// create workout
const createWorkout = async (req,res) => {
    const {title,load,reps} = req.body
    try{
        const user_id = req.user._id
        const workout = await Workout.create({title,load,reps,user_id})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}
//delete workout
const DeleteById = async(req,res) => {
    const {id} = req.params 

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "Not Such Workout"})
    }

    const workout = await Workout.findOneAndDelete({_id:id})

    if(!workout){
        return req.status(404).json({error : 'No such workout'})
    }

    res.status(200).json(workout)
}

//update workout

const UpdateByid = async(req,res) => {
    const {id} = req.params 
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "Not Such Workout"})
    }

    const workout = await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!workout){
        return req.status(404).json({error : 'No such workout'})
    }

    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getWorkout,
    getWorkoutById,
    DeleteById,
    UpdateByid,
}