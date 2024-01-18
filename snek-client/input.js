const stdin = process.stdin;

//initializes stdin behavior
const setupInput = function() {
  stdin.setRawMode(true); //makes it so that every keyboard entry is sent to the server immediately
  stdin.setEncoding("utf8"); //makes sure that data is decoded from hex to language
  stdin.resume();
return stdin;
};

const handleUserInput = (socket) => {
  stdin.on('data', (data) => { //listen for keyboard and use data to determine command/text sent to server
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
    if (data === '1'){
      socket.write('Say: Nom');
    }
    if (data === '2') {
      socket.write('Say: Yum');
    }
  });
}

module.exports = {
  handleUserInput,
  setupInput
};
