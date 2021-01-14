import type { Handler } from 'aws-lambda'
import {execFileSync} from "child_process";
// import { MigrateDeploy } from '@prisma/migrate'

// Prisma cli needs network access and write access to node_modules/...
// Then we cannot use that here.

// Assume this executed on project root.
const handler = async (): Promise<any> => {
  execFileSync("npm", ["run", "migrate:deploy"]);

  // await MigrateDeploy.new().parse([
  //   '--schema',
  //   './server/prisma/schema.prisma',
  //   '--preview-feature'
  // ])

  return 'migration_ok'
}

exports.handler = handler
