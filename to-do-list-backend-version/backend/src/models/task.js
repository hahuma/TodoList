const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    taskText: {
        type: String,
        required: true,
    },
    taskDate: {
        type: String,
        required: false,
    },
    user_id: {
        type: String,
        ref: 'User',
        required: true,
    }
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task