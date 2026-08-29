const { AdhocServer } = require('hunantet-server');

const PORT = process.env.PORT || 27312;
const server = new AdhocServer({
    port: parseInt(PORT)
});

server.start(() => {
    console.log(`Server PPSSPP berjalan di port ${PORT}`);
});
