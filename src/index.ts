import express, { Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routes'
  const app: express.Application = express()
  const port = 3000

  app.use(cors({
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type'],
    methods: 'POST',
  }))
  app.use(bodyParser.json({ limit: '3mb' }))
  app.use(bodyParser.urlencoded({ extended: true, limit: '3mb' }))

  app.get('/', (_req: Request, res: Response) => {
    return res.send('reducer api root route go to Documention: https://github.com/blacksnowsoon/Image-Reducer-Api')
  })

  
  app.use('/', routes)

  app.listen(port, () => {
    return console.log(`Server is listening on ${port}`)
  })
