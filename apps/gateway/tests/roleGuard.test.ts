import request from 'supertest'
import express from 'express'
import { roleGuard } from '../src/middlewares/roleGuard'

const createAppWithRole = (role: string) => {
  const app = express()
  app.use((req, res, next) => {
    req.headers['x-user-role'] = role
    next()
  })
  app.use(roleGuard)
  app.get('/admin', (_, res) => {res.send('admin')})
  app.get('/dashboard', (_, res) => {res.send('dashboard')})
  return app
}
