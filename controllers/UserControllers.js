const mongoose = require('mongoose')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')



const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

//get all worksout
const loginUser = async(req,res) => {
    const {email,password} = req.body
    try{
        const user =await User.login(email,password)

        const token = createToken(user._id)
        
        res.status(200).json({email, token})
    }
    catch(error) {
        res.status(400).json({error:error.message})
    }

    // res.json({msg:"Login Controller"})
}
const signUpUser = async(req,res) => {

    const {email,password} = req.body

    console.log(req.body)
    try{
        const user = await User.signup(email,password)

        const token = createToken(user._id)
        res.status(200).json({email, token})
    }
    catch(error) {
        res.status(400).json({error:error.message})
    }

    // res.json({msg:"SignUp Controller"})

}

module.exports = {
    loginUser,
    signUpUser
}