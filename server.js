const { AdhocServer } = require('hunantet-server');

const server = new AdhocServer({
    port: 27312
});

server.start(() => {
    console.log('PPSSPP AdHoc Server running on port 27312');
});
