'use strict';

const Hapi = require('@hapi/hapi');
const { default: routes } = require('./routes');


const init = async () => {

    const server = Hapi.server({
        port: 8000,
        host: 'localhost'
    });

   routes.forEach(route => server.route(routes));

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();