const express = require('express')
const routes = express.Router()

const authController = require('./controllers/AuthController')
const SaveTaskController = require('./controllers/SaveTaskController')

routes.post('/', authController.store)
routes.post('/:login/dashboard/', SaveTaskController.store)
routes.get('/:login/dashboard/', SaveTaskController.index)

module.exports = routes;