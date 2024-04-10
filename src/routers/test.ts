import express, { Router } from 'express'


const test: Router = express.Router()

test.get('/test', (req, res) => {
  return res.send('test routes 🏓')
})


export default test