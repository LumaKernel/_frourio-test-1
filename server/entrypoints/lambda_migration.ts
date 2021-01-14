import type { Handler } from 'aws-lambda'
import { execFileSync } from 'child_process'

const handler: Handler = async () => {
  console.info('here1!')
  console.info(process.env)
  console.info('here2!')

  // Assume this executed on project root.
  execFileSync('npm', ['run', 'migrate:deploy'])

  return 'migration_ok'
}

exports.handler = handler
