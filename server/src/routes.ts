import express from 'express'
import ClassesController from './controllers/classes'
import ConnectionsController from './controllers/connections'
import SignIn from './controllers/signIn'
import SignUp from './controllers/signUp'

const routes = express.Router()

const signIn = new SignIn()
routes.get('/sign-in', signIn.index)

const signUp = new SignUp()
routes.post('/sign-up', signUp.store)

const classes = new ClassesController()
routes.get('/class', classes.index)
routes.post('/class', classes.create)

const connections = new ConnectionsController()
routes.post('/connections', connections.create)
routes.get('/connections', connections.index)

export default routes
