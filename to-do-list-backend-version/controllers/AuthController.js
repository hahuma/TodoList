const express = require('express')
const User = require('../models/user')

module.exports =  {
    async store(req, res){

        const { login, password } = req.body;
        let user = await User.findOne({ login: login })

        if(!user){

            user = await User.create({
                login: login,
                password: password,
            })


            return res.json(user)

        }else{

            res.json('Error: User already exists!')
        }
    }
}