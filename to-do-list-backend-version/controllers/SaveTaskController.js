const express = require('express')

const Task = require('../models/task')
const User = require('../models/user')

module.exports = {
    async store(req, res){
        const { task, date } = req.headers;
        const { login } = req.params;

        let user = await User.findOne({ login })
        let tasks = await Task.create({
            taskText: task,
            taskDate: date,
            user: user.login
        })

        return res.json(tasks)

    },

    async index(req, res){
        const { login } = req.params
        const tasks = await Task.find({user:login})


        res.json(tasks)

    }
}