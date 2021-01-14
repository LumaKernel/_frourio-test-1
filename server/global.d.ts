declare module 'aws-lambda-fastify' {
  import { APIGatewayProxyHandlerV2 } from 'aws-lambda'
  import { FastifyInstance } from 'fastify'

  const awsLambdaFastify: (app: FastifyInstance) => APIGatewayProxyHandlerV2
  export default awsLambdaFastify
}
