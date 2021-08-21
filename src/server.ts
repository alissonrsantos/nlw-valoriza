import express, { Response, Request, NextFunction } from 'express'
import 'express-async-errors'
import { router } from './routes'
import './database'

const app = express()

app.use(express.json())

app.use(router)

app.use((_error: Error, request: Request, response: Response, next: NextFunction) => {
  if (_error instanceof Error) {
    return response.status(400).json({ error: _error.message })
  }

  return response.status(500).json({ status: 'Error', message: 'Internal Server Error!' })
})

app.listen(3000, () => {
  console.log('Server is running!')
})
