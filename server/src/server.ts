require('dotenv').config()

import express from 'express'
import routes from './routes'
import cors from 'cors'
import checkJwt from './middleware/jwt'

const port = process.env.PORT || 3333
const app = express()

app.use(cors())

app.use(checkJwt)

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
