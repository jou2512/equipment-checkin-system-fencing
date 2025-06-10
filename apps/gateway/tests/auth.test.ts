import request from 'supertest'
import express from 'express'
import { auth } from '../src/middlewares/auth'

jest.mock('../src/utils/appwrite', () => ({
    getUserFromToken: jest.fn(() => Promise.resolve({ $id: 'user123', labels: ['admin'] }))
}))

const app = express()
app.use((req, _res, next) => {
        req.headers.authorization = 'Bearer fake-token'
        next()
})
app.use(auth)
app.get('/', (_req: express.Request, res: express.Response) => {
        res.send('OK')
})


