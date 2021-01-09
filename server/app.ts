import path from 'path'
import Fastify from 'fastify'
import helmet from 'fastify-helmet'
import cors from 'fastify-cors'
import fastifyStatic from 'fastify-static'
import fastifyJwt from 'fastify-jwt'
import { JWT_SECRET, BASE_PATH } from './service/envValues'
import server from './$server'

const app = Fastify()

app.register(helmet)
app.register(cors)
app.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: BASE_PATH
})
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

export { app }
