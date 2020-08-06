import express from 'express'
import ClassesController from './controllers/classes.controller'
import ConnectionsController from './controllers/connections.controller'

const routes = express.Router()

const classes = new ClassesController()
routes.get('/class', classes.index)
routes.post('/class', classes.create)

const connections = new ConnectionsController()
routes.post('/connections', connections.create)
routes.get('/connections', connections.index)

export default routes
