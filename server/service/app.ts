import path from 'path'
import Fastify, { FastifyServerFactory } from 'fastify'
import helmet from 'fastify-helmet'
import cors from 'fastify-cors'
import fastifyStatic from 'fastify-static'
import fastifyJwt from 'fastify-jwt'
import { JWT_SECRET, BASE_PATH, USER_STATIC_DIR } from '$/service/envValues'
import server from '$/$server'

export const init = (serverFactory?: FastifyServerFactory) => {
  const app = Fastify({ serverFactory })

  app.register(helmet)
  app.register(cors)
  app.register(fastifyStatic, {
    root: path.join(__dirname, 'static'),
    prefix: '/static/'
  })
  if (USER_STATIC_DIR) {
    // XXX(sample): ルートからのパスを解決できるように resolve を
    // XXX(sample): 同じ prefix は無理だった
    app.after(() => {
      app.register(fastifyStatic, {
        root: path.resolve(__dirname, USER_STATIC_DIR),
        prefix: '/data/',
        // XXX(sample): 2 つめの登録なので必要
        decorateReply: false
      })
    })
  }
  app.register(fastifyJwt, { secret: JWT_SECRET })
  app.route({
    method: 'GET',
    url: '/_healthcheck',
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            status: { type: 'string' }
          },
          required: ['status']
        }
      }
    },
    handler: (_request, reply) => {
      reply.send({ status: 'ok' })
    }
  })

  server(app, { basePath: BASE_PATH })
  return app
}
