import jsonSerer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('db.jason');
const middlewares = jsonSerer.defaults();
const port = process.env.PORT || 3333;

server.use(middlewares);
server.use(router);

server.listen(port);

