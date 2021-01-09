import { defineController } from './$relay'
import { validateUser } from '$/service/user'
import crypto from 'crypto'
import { FAIL_PASS } from '$/service/envValues'

export default defineController((fastify) => ({
  post: ({ body }) => {
    const valid = validateUser(body.id, body.pass)

    if (FAIL_PASS !== null) {
      if (
        body.id === 'fail' &&
        crypto.timingSafeEqual(Buffer.from(body.pass), Buffer.from(FAIL_PASS))
      ) {
        throw new Error('Unexpected and unhanded error!: ' + new Date())
      }
    }

    if (valid) {
      return { status: 201, body: { token: fastify.jwt.sign({ id: body.id }) } }
    } else {
      return { status: 401 }
    }
  }
}))
