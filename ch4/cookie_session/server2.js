const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log("Received request..");

  fs.readFile('./server2.html', (err, data) => {
    res.end(data);
  })
});

server.listen(8081);

server.on('listening', () => {
  console.log('wait on port 8081');
});
