// index.ts
import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express'
import cookieParser from 'cookie-parser'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { Client, Account } from 'node-appwrite'

import { roleGuard } from './middleware/roleGuard'

const app = express()
app.use(express.json())
app.use(cookieParser())

const APPWRITE_ENDPOINT = process.env.APPWRITE_API_ENDPOINT!
const APPWRITE_PROJECT_ID = process.env.APPWRITE_PROJECT_ID!

interface CustomRequest extends Request {
        user?: any; // Benutzerdefinierte Eigenschaft für den Benutzer
}

// check...
if (!APPWRITE_ENDPOINT || !APPWRITE_PROJECT_ID) {
  throw new Error('❌ Appwrite ENV vars fehlen')
}

// JWT validieren & User holen
async function getUserFromToken(token: string) {
  const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID)
    .setJWT(token)

  const account = new Account(client)
  return await account.get()
}

// Auth Middleware
const jwtCache = new Map<string, { user: any; expires: number }>()

// Auth Middleware mit JWT Cache
app.use(async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    (req as CustomRequest).user = null
    return next()
  }

  const token = authHeader.split(' ')[1]

  // ✅ Check if token is cached and still valid
  const cached = jwtCache.get(token)
  const now = Date.now()
  if (cached && cached.expires > now) {
    (req as CustomRequest).user = cached.user
    req.headers['x-user-id'] = cached.user.$id
    req.headers['x-user-role'] = cached.user.labels?.[0] || 'guest'
    return next()
  }

  try {
    const user = await getUserFromToken(token)

    // 🧠 Cache the result for 60 seconds
    jwtCache.set(token, {
      user,
      expires: now + 60 * 1000
    })
      
      { (req as CustomRequest).user = user }
    req.headers['x-user-id'] = user.$id
    req.headers['x-user-role'] = user.labels?.[0] || 'guest'
    next()
  } catch (err) {
    console.warn('[Auth Error]', (err as Error).message)
    {(req as CustomRequest).user = null}
    next()
  }
})


// Rollenbasierte Route-Guards
app.use(roleGuard)

// Proxies
app.use('/admin', createProxyMiddleware({
  target: 'http://admin:3002',
  changeOrigin: true,
  pathRewrite: { '^/admin': '' }
}))

app.use('/dashboard', createProxyMiddleware({
  target: 'http://dashboard:3001',
  changeOrigin: true,
  pathRewrite: { '^/dashboard': '' }
}))

app.use('/', createProxyMiddleware({
  target: 'http://landing:3000',
  changeOrigin: true
}))

app.listen(8080, () => {
  console.log('🚪 Gateway ready at http://localhost:8080')
})
