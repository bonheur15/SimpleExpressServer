module.exports = {
  apps : [{
    script: 'index.js',
    instances:1,
    exec_mode:"cluster"
  }],

  deploy : {
    production : {
      user : 'root',
      host : '164.90.154.134',
      ref  : 'origin/master',
      repo : 'https://github.com/bonheur15/SimpleExpressServer.git',
      path : '/home/app',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
