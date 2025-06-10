import { createProxyMiddleware } from 'http-proxy-middleware'
import express from 'express'

export const proxyRoutes = express.Router()

proxyRoutes.use('/admin', createProxyMiddleware({
  target: 'http://admin:3002',
  changeOrigin: true,
  pathRewrite: { '^/admin': '' }
}))

proxyRoutes.use('/dashboard', createProxyMiddleware({
  target: 'http://dashboard:3001',
  changeOrigin: true,
  pathRewrite: { '^/dashboard': '' }
}))

proxyRoutes.use('/', createProxyMiddleware({
  target: 'http://landing:3000',
  changeOrigin: true
}))
