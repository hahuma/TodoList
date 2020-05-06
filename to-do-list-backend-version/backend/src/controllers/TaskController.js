const express = require('express')

const Task = require('../models/task')
const User = require('../models/user')

module.exports = {
    async store(req, res){
        const { taskText, taskDate } = req.query;
        const user_id = localStorage.getItem('user_id');

        let user = await User.findOne({ user_id })
        let task = await Task.create({
            taskText,
            taskDate,
            user_id
        })

        return res.json(task)

    },

    async index(req, res){
        const user_id = localStorage.getItem('user_id');
        const tasks = await Task.find({user_id})


        res.json(tasks)

    }
}