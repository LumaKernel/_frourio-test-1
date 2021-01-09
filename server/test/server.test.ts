import fastify from 'fastify'
import controller from '$/api/tasks/controller'
import { app } from '../app'

test('healthcheck', async () => {
  const response = await app.inject({
    method: 'GET',
    url: '/_healthcheck'
  })
  expect(response.statusCode).toBe(200)
  expect(response.body).toEqual({ status: 'ok' })
})

test('dependency injection into controller', async () => {
  let printedMessage = ''

  const injectedController = controller.inject((deps) => ({
    getTasks: deps.getTasks.inject({
      prisma: {
        task: {
          findMany: () =>
            Promise.resolve([
              { id: 0, label: 'task1', done: false },
              { id: 1, label: 'task2', done: false },
              { id: 2, label: 'task3', done: true },
              { id: 3, label: 'task4', done: true },
              { id: 4, label: 'task5', done: false }
            ])
        }
      }
    }),
    print: (text: string) => {
      printedMessage = text
    }
  }))(fastify())

  const limit = 3
  const message = 'test message'
  const res = await injectedController.get({
    query: { limit, message }
  })

  expect(res.body).toHaveLength(limit)
  expect(printedMessage).toBe(message)
})
