const express = require('express')
const app = require('../app')
const User = require('../models/userSchema')

module.exports =  {
    async post(req, res){

        const { login, password } = req.body;
        const allUsers = await User.findOne({ login: login })

        if(!allUsers){

            const user = await User.create({
                login: login,
                password: password,
            })

            return res.json(user)

        }else{

            res.json('Error: User already exists!')
        }
    }
}