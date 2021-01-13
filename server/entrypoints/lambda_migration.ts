import type { Handler } from 'aws-lambda'
import { MigrateDeploy } from '@prisma/migrate'

// Prisma cli needs network access and write access to node_modules/...
// Then we cannot use that here.

// Assume this executed on project root.
const handler: Handler = async () => {
  await MigrateDeploy.new().parse([
    '--schema',
    './server/prisma/schema.prisma',
    '--preview-feature'
  ])
  return 'migration_ok'
}

exports.handler = handler
