const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    taskText: {
        type: String,
        required: true,
    },
    taskDate: {
        type: String,
        required: false,
    }
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task