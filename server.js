const Hapi = require('hapi');
const scrape = require('./index')

// Create a server with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: 8000
})

// Add the route
server.route({
    method: 'GET',
    path: '/scrape',
    handler: async (request, h) => {
        const data = await scrape()
        return data
    }
})

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => 'hello world'
})

// Start the server
const start =  async function() {
    try {
        await server.start()
    } catch (err) {
        console.log(err)
        process.exit(1)
    }

    console.log('Server running at:', server.info.uri)
};

start()