module.exports = {
  apps: [
    {
      name: 'server',
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
        'npm install',
        'npm run build:server',
        'pm2 startOrRestart ecosystem.config.js --env production'
      ].join(' && '),
      'pre-setup': '',
      env: {
        NODE_ENV: 'production'
      }
    }
  }
}
