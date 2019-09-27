module.exports = {
  apps: [{
    name: 'madam',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-34-244-123-244.eu-west-1.compute.amazonaws.com',
      key: '~/.ssh/hjml-kp-1.pem',
      ref: 'origin/master',
      repo: 'https://github.com/hourdays/madam.git',
      path: '/home/ec2-user/madam',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
