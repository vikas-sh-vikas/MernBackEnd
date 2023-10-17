require('dotenv').config()
  
const express = require('express')
const mongoose = require('mongoose')
 
const WorkoutRoutes = require('./Routs/workout')

mongoose.connect(process.env.MONG_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB listening to PORT", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

const app = express()

app.use(express.json())
{
     
}
app.use((req,res,next) => {
    console.log("object")
    next()
})

app.use('/api/workouts', WorkoutRoutes)
 
 

