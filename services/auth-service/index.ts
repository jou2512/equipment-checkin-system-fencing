import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.get('/user/:id', (req, res) => {
  const { id } = req.params
  res.json({ id, name: 'Joel', role: 'admin' })
})

app.listen(3001, () => console.log('[auth-service] running on port 3001'))
