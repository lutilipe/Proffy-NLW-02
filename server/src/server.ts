require('dotenv').config()

import express from 'express'
import routes from './routes'
import cors from 'cors'

const port = process.env.SERVER_PORT
const app = express()

app.use(cors())

app.use(express.json())
app.use(
  express.urlencoded({
    extended: false,
  })
)

app.use(routes)

app.listen(port, () => {
  console.log(`Server executando na porta ${port}`)
})
