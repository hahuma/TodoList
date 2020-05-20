const express = require('express')
const routes = express.Router()

const authController = require('./controllers/AuthController')
const TaskController = require('./controllers/TaskController')

routes.post('/register', authController.store)
routes.get('/', authController.index)
routes.post('/:_id/profile/', TaskController.store)
routes.get('/:_id/profile/', TaskController.index)

module.exports = routes;