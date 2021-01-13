import type { Handler } from 'aws-lambda'
import { MigrateDeploy } from '@prisma/migrate'

// Prisma cli needs network access and write access to node_modules/...
// Then we cannot use that here.
const handler: Handler = async () => {
  await MigrateDeploy.new().parse(['--preview-feature'])
  return 'migration_ok'
}

exports.handler = handler
