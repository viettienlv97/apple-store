import express, {
  Application,
  urlencoded,
  json,
  Response,
  Request,
  ErrorRequestHandler,
  NextFunction
} from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import mongoose from 'mongoose'

import userRoute from './routes/user.route.ts'
import chalk from 'chalk'

config()
const app = express()
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(express.static('./public'))

app.use(
  (
    error: ErrorRequestHandler,
    _: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.error('Server error', error)
    res.status(500).send('Server error!')
  }
)

app.use('/api/auth', userRoute)

app.use((_, res: Response) => {
  res.status(404).send('Page not found')
})

mongoose
  .connect(process.env.MONGODB_URI ?? '', { dbName: 'assignment-03' })
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log(`
${chalk.bold.blue('Server is running')}
http://localhost:${chalk.bold.blueBright(process.env.PORT)}/      
`)
    })
  })
  .catch((err) => console.error(err))
