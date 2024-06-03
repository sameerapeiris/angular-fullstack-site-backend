'use strict';

const Hapi = require('@hapi/hapi');
import routes from './routes';
import { db } from './database';

let server;

const start = async () => {
    server = Hapi.server({
        port: 8000,
        host: 'localhost',
        routes: {
            cors: {
              origin: ['http://localhost:4200'], // or specific origins ['http://localhost:4200']
              headers: ['Accept', 'Content-Type'],
              exposedHeaders: ['WWW-Authenticate', 'Server-Authorization'],
              additionalExposedHeaders: ['X-Total-Count'],
              maxAge: 60,
              credentials: true
            }
          }
    });

    routes.forEach(route => server.route(route));

    db.connect();
    await server.start();
    console.log(`Server is listening on ${server.info.uri}`);
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

process.on('SIGINT', async () => {
    console.log('Stopping server...');
    await server.stop({ timeout: 10000 });
    db.end();
    console.log('Server stopped');
    process.exit(0);
});

start();