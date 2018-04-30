module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`);

    socket.on('playerInput', input => {
      console.log('serverside - emitting playerinput', input.guess);
      io.sockets.emit('serverSendInput', input);
    });

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`);
    });
  });
};
