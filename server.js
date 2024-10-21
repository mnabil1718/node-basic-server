const http = require('http');

const port = 5000;
const host = 'localhost';

/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 * 
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */
const handler = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end('<h1>Halo HTTP Server!</h1>');
}


const server = http.createServer(handler);
server.listen(port, host, () => {
    console.log(`listening on http://${host}:${port}`);
});
