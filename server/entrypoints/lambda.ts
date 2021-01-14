import awsLambdaFastify from 'aws-lambda-fastify'
import { init } from '$/service/app'
import type { APIGatewayProxyHandlerV2 } from 'aws-lambda'

const app = init()
const proxy: APIGatewayProxyHandlerV2 = awsLambdaFastify(app)

exports.handler = proxy
