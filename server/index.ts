import { app } from './app'
import { SERVER_PORT } from './service/envValues'
import fluentLogger from 'fluent-logger'
import { FastifyError, FastifyRequest } from 'fastify'

const structuredLogger = fluentLogger.createFluentSender('frourio-app', {
  host: 'localhost',
  port: 24224,
  timeout: 3.0
})

const report = (error: FastifyError, request: FastifyRequest) => {
  const payload = {
    serviceContext: {
      service: 'frourio-app'
    },
    message: error.stack,
    context: {
      httpRequest: {
        url: request.url,
        method: request.method,
        referrer: request.headers['referer'],
        userAgent: request.headers['user-agent'],
        remoteIp: request.ip,
        responseStatusCode: 500
      }
    }
  }
  structuredLogger.emit('errors', payload)
}

app.setErrorHandler((error, request, reply) => {
  report(error, request)
  reply.status(500).send(error.message)
})

app.listen(SERVER_PORT, '0.0.0.0').then(() => {
  process.send?.('ready')
})
