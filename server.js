const fs = require('fs');
const http = require('http');
require('cors');
const port = 3000;

const server = http.createServer((req, res) => {
  url = req.url;
  let filePath;

  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-control-allow-origin': '*'
  });

  if (url === '/') {
    filePath = './pages/index.json';
  } else {
    filePath = fs.existsSync('./pages' + url + '.json') ? './pages' + url + '.json' : './pages/404.json';
  }

  data = fs.readFileSync(filePath, 'utf-8');

  res.write(data)

  res.end();
});

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
