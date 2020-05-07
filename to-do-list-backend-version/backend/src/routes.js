const express = require('express')
const routes = express.Router()

const authController = require('./controllers/AuthController')
const TaskController = require('./controllers/TaskController')

routes.post('/', authController.store)
routes.get('/', authController.index)
routes.post('/:_id/dashboard/', TaskController.store)
routes.get('/:_id/dashboard/', TaskController.index)

module.exports = routes;