import 'dotenv/config'
import express from 'express'
import cookieParser from 'cookie-parser'

import { auth } from './middlewares/auth'
import { roleGuard } from './middlewares/roleGuard'
import { proxyRoutes } from './proxies'

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(auth)
app.use(roleGuard)
app.use(proxyRoutes)

app.listen(8080, () => {
  console.log('🚪 Gateway ready at http://localhost:8080')
})
