const express = require('express')
const app = require('../app')

const Task = require('../models/taskSchema')

module.exports = {
    async post(req, res){
        const { task, date } = req.headers;

        const tasks = await Task.create({
            taskText: task,
            taskDate: date,
        })

        return res.json(tasks)

    },

    async index(req, res){

        const Tasks = await Task.find()

        //Create a functionality to only create tasks on the logged user

        res.json(Tasks)
    }
}