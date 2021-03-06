const express = require('express')
const User = require('../models/user')

module.exports =  {
    async store(req, res){

        const { username, email, password } = req.body;
        let user = await User.findOne({ email })

        if(!user){

            user = await User.create({
                username,
                email,
                password,
            })
            return res.json(user)

        }else{

            return res.status(400).json({error: 'This user already exists!'})


        }
    },

    async index(req, res){
        const { email, password } = req.query;
        let user = await User.findOne({email, password})
        if(user){

            return res.json(user)

        }else{

            return res.status(400).json({error: 'E-mail/Password are incorrect'})

        }
    }
}