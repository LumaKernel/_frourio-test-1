import { Handler } from 'aws-lambda'
import { execFileSync } from 'child_process'

const handler: Handler = () => {
  execFileSync('npm', ['run', 'migrate:deploy'])
}

exports.handler = handler
