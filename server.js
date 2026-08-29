const AdhocServer = require('adhoc-server');

const PORT = process.env.PORT || 27312;
const server = new AdhocServer({
    port: parseInt(PORT)
});

server.listen(PORT, () => {
    console.log(`Server PPSSPP berjalan di port ${PORT}`);
});
