import { Handler } from 'aws-lambda'
import { execFileSync } from 'child_process'

export const handler: Handler = () => {
  execFileSync('npm', ['run', 'migrate:deploy'])
}
