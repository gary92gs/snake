const net = require("net");
const connect = require('./client');
const stdin = process.stdin;


const setupInput = function(socket) {

  stdin.setRawMode(true); //makes it so that every keyboard entry is sent to the server immediately
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', (data) => {
    if (data === '\u0003') {
      process.exit();
    }
    if (data === 'w') {
      socket.write('Move: up');
    }
    if (data === 'd') {
      socket.write('Move: right');
    }
    if (data === 's') {
      socket.write('Move: down');
    }
    if (data === 'a') {
      socket.write('Move: left');
    }
  });
return stdin;
};

const socket1 = connect();
setupInput(socket1);
console.log("Connecting ...");


