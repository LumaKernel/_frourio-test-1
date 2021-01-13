'use strict'

exports.handler = async (event) => {
  // See also: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/974e3ca27de4a033589e0f4803ec94a35c1d2305/types/aws-lambda/trigger/api-gateway-proxy.d.ts#L100
  const path = event.requestContext && event.requestContext.path

  if (path === '/_healthcheck') {
    return {
      statusCode: 503,
      isBase64Encoded: false,
      headers: {
        'Content-Type': 'application/json'
      },
      body: '{"status":"initial"}'
    }
  }

  const response = {
    statusCode: 503,
    isBase64Encoded: false,
    headers: {
      'Content-Type': 'text/html'
    },
    // Be careful, it is not XSS safe.
    body: `<h1>503 Service Unavailable</h1><p>${JSON.stringify(event)}</p>`
  }

  return response
}
