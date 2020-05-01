const express = require('express')
const routes = express.Router()

const authController = require('./controllers/AuthController')
const SaveTaskController = require('./controllers/SaveTaskController')

routes.post('/', authController.post)
routes.post('/dashboard', SaveTaskController.post)
routes.get('/dashboard', SaveTaskController.index)

module.exports = routes;