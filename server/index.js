const path = require('path');
const express = require('express');
const PORT = 1337;
const app = express();
const socketio = require('socket.io');
const socket = require('./socket');
module.exports = app;

const createApp = () => {
  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'assets')));

  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'assets/index.html'));
  });

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
};

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () => console.log(`Mixing up some emojis on ${PORT}`));

  // set up our socket control center
  const io = socketio(server);
  socket(io);
};

// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  createApp();
  startListening();
} else {
  createApp();
}
