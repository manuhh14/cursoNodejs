/***Creadonos nnuestro primer servidor http***/
///const http = require ('http');

/*
const servidor = http.createServer();

servidor.on('connection', (socket)=>{
    console.log('Nueva conexión detectada...');
});

const port = 2012;

servidor.listen(port)
console.log('Escuchando del puerto: ' + port);
*/

const http = require('http');

const server = http.createServer((req, res) => {
    /** Rutas **/
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Bienvenido a mi sitio web</h1>');
        res.write('<p> Mi web de coches</p>');
        res.write('Hola mundo ');
        res.write('desde Node.js');
        res.end(); 
    } 
    else if (req.url === '/coches') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const coches = [
            { marca: 'Audi', modelo: 'A4', color: 'blanco' },
            { marca: 'BMW', modelo: '320i', color: 'negro' },
            { marca: 'Mercedes', modelo: 'SLS AMG', color: 'rojo' }
        ];
        res.end(JSON.stringify(coches)); 
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada'); 
     }
});

const port = 3030;
server.listen(port);
console.log('Escuchando en puerto: ' + port + " ......");
