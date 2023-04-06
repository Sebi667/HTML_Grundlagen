const http = require('http');
const mongodb = require('mongodb');

const hostname = '127.0.0.1'; // localhost
const port = 3000;
const url = 'mongodb://localhost:27017'; // für lokale MongoDB
const mongoClient = new mongodb.MongoClient(url);

async function startServer() {
  console.log("connecting to DB and starting HTTP server");
  await mongoClient.connect();
  server.listen(port, hostname);
}

const server = http.createServer(async (request, response) => {
  let url = new URL(request.url || '', `http://${request.headers.host}`);

  response.statusCode = 200;
  response.setHeader('Access-Control-Allow-Origin', '*'); // bei CORS Fehler

  switch (url.pathname) {
    case '/test': {
      switch (request.method) {
        case 'GET':
          response.setHeader('Content-Type', 'text/plain');
          response.write('GET test');
          break;
        case 'POST':
          response.setHeader('Content-Type', 'text/plain');
          response.write('POST test');
          break;
      }
      break;
    }

    case '/response': {
      response.setHeader('Content-Type', 'text/plain; charset=utf-8');
      response.write(url.searchParams.get('anzahl') + ' Stück ' + url.searchParams.get('name'));
      break;
    }

    case '/books': {
      const booksCollection = mongoClient.db('library').collection('books');
      let result;

      if (url.searchParams.get('name')) {
        result = await booksCollection.find({ name: url.searchParams.get('name') });
      } else {
        result = await booksCollection.find({});
      }

      response.setHeader('Content-Type', 'application/json');
      response.write(JSON.stringify(result.toArray()));
      break;
    }

    default:
      response.statusCode = 404;
      break;
  }

  response.end();
});

startServer();