const express = require('express')
const routes = express.Router()

const authController = require('./controllers/AuthController')
const TaskController = require('./controllers/TaskController')

routes.post('/register', authController.store)
routes.get('/', authController.index)
routes.post('/profile/:_id', TaskController.store)
routes.get('/profile/:_id', TaskController.index)

module.exports = routes;