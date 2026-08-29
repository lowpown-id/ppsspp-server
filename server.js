const { AdhocServer } = require('hunantet-server');
const port = process.env.PORT || 27312;
const server = new AdhocServer({ port: parseInt(port) });
server.start(() => {
    console.log(`Server PPSSPP aktif di port ${port}`);
});
