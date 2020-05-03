const express = require('express')

const Task = require('../models/task')
const User = require('../models/user')

module.exports = {
    async store(req, res){
        const { taskText, taskDate } = req.query;
        const { login } = req.header;

        let user = await User.findOne({ login })
        let task = await Task.create({
            taskText,
            taskDate,
            user: user.login
        })

        return res.json(task)

    },

    async index(req, res){
        const { login } = req.header
        const tasks = await Task.find({user:login})


        res.json(tasks)

    }
}