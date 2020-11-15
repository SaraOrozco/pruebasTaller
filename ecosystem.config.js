module.exports = {
    apps: [{
        script: './bin/www',
        env_production: {
            name: 'calculadora-production',
            NODE_ENV: 'production',
            port: 3000
        }
    }]
}