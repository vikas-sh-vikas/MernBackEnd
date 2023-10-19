const mongoose = require('mongoose')
const User = require('../models/userModel')

//get all worksout
const loginUser = async(req,res) => {
    res.json({msg:"Login Controller"})
}
const signUpUser = async(req,res) => {
    const {email,password} = req.body
    try{
        const user =await User.signup(email,password)
        res.status(200).json({email, user})
    }
    catch(error) {
        res.status(400).json({error:error.message})
    }

    res.json({msg:"SignUp Controller"})

}

module.exports = {
    loginUser,
    signUpUser
}