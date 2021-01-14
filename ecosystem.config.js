module.exports = {
  apps: [
    {
      name: 'frourio-app',
      script: 'index.js',
      cwd: './server/',
      instances: 1,
      wait_ready: true,
      listen_timeout: 10000,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production',
        DATABASE_URL: process.env.DATABASE_URL,
        JWT_SECRET: process.env.JWT_SECRET,
        USER_ID: process.env.USER_ID,
        USER_PASS: process.env.USER_PASS,
        API_ORIGIN: process.env.API_ORIGIN,
        BASE_PATH: process.env.BASE_PATH,
        SERVER_PORT: process.env.SERVER_PORT,
        STATIC_DIR: process.env.STATIC_DIR,
        // XXX(sample): 実験用の個人的なやつ
        FAIL_PASS: process.env.FAIL_PASS
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
        'npm run migrate:deploy --prefix server',
        'npx pm2 startOrRestart ecosystem.config.js --env production'
      ].join(' && '),
      'pre-setup': '',
      env: {
        NODE_ENV: 'production',
        DATABASE_URL: process.env.API_DATABASE_URL,
        JWT_SECRET: process.env.API_JWT_SECRET,
        USER_ID: process.env.API_USER_ID,
        USER_PASS: process.env.API_USER_PASS,
        API_ORIGIN: process.env.API_ORIGIN,
        BASE_PATH: process.env.API_BASE_PATH,
        SERVER_PORT: process.env.API_SERVER_PORT,
        STATIC_DIR: process.env.API_STATIC_DIR
      }
    }
  }
}
