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
    },

    async index(req, res){
        const { login, password } = req.query;
        let user = await User.findOne({login, password})
        console.log(req.query)
        if(user){

            return res.json(user)

        }else{

            return res.json("Error: This user doesn't exist")

        }
    }
}