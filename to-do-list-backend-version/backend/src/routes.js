const express = require('express')
const routes = express.Router()

const authController = require('./controllers/AuthController')
const TaskController = require('./controllers/TaskController')

routes.post('/', authController.store)
routes.post('/:login/dashboard/', TaskController.store)
routes.get('/:login/dashboard/', TaskController.index)

module.exports = routes;