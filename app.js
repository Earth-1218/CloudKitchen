// import scripts
var express = require('express');
var partials = require('express-partials');
var path = require('path');
var cookieParser = require('cookie-parser');
var http = require('http');
var logger = require('morgan');
var apiRoutes = require('./routes/api');
var webRoutes = require('./routes/web');

// create application
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(partials());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// initialize router
app.use('/api/v1', apiRoutes);
app.use('/', webRoutes);

// setup port
var port = process.env.PORT || 3000;
app.set('port', port);

// create server
var server = http.createServer(app);

// listen server at spcified port
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// throw error
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

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
});

// finally lauch server
server.on('listening', () => {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log('Listening on ' + bind);
});
