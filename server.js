const server = require('./app')

const port = 3000

// connect to database

server.listen(port, () => {

    console.log(`server running at http://localhost:${port}`);
})
