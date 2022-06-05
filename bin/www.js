#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('nips-server-20220215:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */
const PORTNUM = 34815
var port = normalizePort(process.env.PORT || PORTNUM )
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
const LOGGER=console.log
LOGGER( `listening ${PORTNUM}`)
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
/*********************** */
const getipsocket=(socket)=>{return socket.request.connection.remoteAddress || socket.handshake.address.address || socket.handshake.headers ['X-FORWARDED-FOR']}
// server_https
app.io=require('socket.io')(server , { cors: { origin: "*"
  , methods: ['GET','POST']
  , credentials:true
} } ) // SOCKET
app.set('socketio',app.io)
app.io.on('connection',socket=>{
  const address=getipsocket(socket) // socket.request.connection.remoteAddress // socket.handshake.address
  const port=socket.request.connection.remotePort //  LOGGER(socket.request.connection)
//  bindIpPortSocket( address,socket.id,port )
  let {userid:uidfromsocket}=socket.request._query // .userid
  let {username: usernamefromsocket}=socket.request._query
//  setactivestatus(usernamefromsocket , 1 )
  LOGGER('rz9TWxHI6C',socket.request._query)
  if (uidfromsocket){
//    bindUseridSocketid(uidfromsocket,socket.id )
  } else {}
  if (usernamefromsocket) {
  //  bindUsernameSocketid(usernamefromsocket, socket.id)
  } else {}
//  if(false){LOGGER(`SOCKET CONN-${address},${socket.id},${uidfromsocket}`)}
    LOGGER(socket.handshake.query)
    LOGGER(`${socket.id},, ${address},,${port},,${uidfromsocket},${socket.handshake.query.userid} socket connected`)
    socket.on('message',msg=>LOGGER('SF1YM8XTB4' , msg , socket.id))
    socket.on('disconnect',()=>{  const address=socket.request.connection.remoteAddress
//    unbindIpPortSocket( address , socket.id )
//      deleteSocketid(socket.id )
  //    unbindsocket(usernamefromsocket , uidfromsocket)
      LOGGER(`${socket.id},${address},${port},${uidfromsocket} socket DISconnected`)
    //  setactivestatus(usernamefromsocket , 0 )
    })
  socket.on('ACK',msg=>{ const jmsg=JSON.parse(msg);
  })
})

