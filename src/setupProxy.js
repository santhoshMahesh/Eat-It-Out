const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/endpoint',{
      target: 'url',
      changeOrigin: true,
    }),
  )
}
