import express, { Router } from 'express'
import reduce from './routers/reduce'
import test from './routers/test'


const routes: Router = express.Router()

routes.use('/', reduce)
routes.use('/', test)


export default routes