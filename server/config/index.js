var config = {
    name: 'API',
    server: {
        host: '0.0.0.0',        
        port: 8000,
        labels: ['api'],
        routes: {
            cors: { credentials: 'true' }
        }
    },
    database: {
        mongo:
        {
            //sectet
        }
    }
};


module.exports = config
