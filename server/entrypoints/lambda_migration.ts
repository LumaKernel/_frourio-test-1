import { Handler } from 'aws-lambda'
import { execFileSync } from 'child_process'

const handler: Handler = async () => {
  execFileSync('npm', ['run', 'migrate:deploy'])
  return 'migration_ok'
}

exports.handler = handler
