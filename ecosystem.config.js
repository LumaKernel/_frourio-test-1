module.exports = {
  apps: [
    {
      name: 'frourio-app',
      script: 'index.js',
      cwd: './server/',
      instances: 1,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy: {
    production: {
      user: process.env.API_DEPLOY_USER,
      host: process.env.API_DEPLOY_HOST,
      repo: process.env.API_DEPLOY_REPO,
      ref: 'origin/master',
      path: '/opt/apiserver/',
      ssh_options: [],
      'pre-deploy-local': '',
      'post-deploy': [
        'npm install --production=false',
        'npm install --prefix server --production=false',
        'npm run build:server',
        'npx prisma migrate deploy',
        'npx pm2 startOrRestart ecosystem.config.js --env production'
      ].join(' && '),
      'pre-setup': '',
      env: {
        NODE_ENV: 'production',
        DATABASE_URL: process.env.API_DATABASE_URL
      }
    }
  }
}
