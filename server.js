require('dotenv').config()
  
const express = require('express')
const app = express()
const mongoose = require('mongoose')
 
const WorkoutRoutes = require('./Routs/workout')
const UserRoutes = require('./Routs/user')
const bodyParser = require("body-parser");

mongoose.connect(process.env.MONG_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB listening to PORT", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/api/workouts', WorkoutRoutes)
app.use('/api/user', UserRoutes)
 

