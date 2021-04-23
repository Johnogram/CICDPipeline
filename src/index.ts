import server from './server';

const { NODE_PORT = 3000 } = process.env;

server.listen(Number(NODE_PORT));
