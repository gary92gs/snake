const net = require("net");

const connect = function () {
  const connectSocket = net.createConnection({
    host: 'localhost',// IP address here,
    port: '50541'// PORT number here,
  });
  connectSocket.on('connect', stream => {
    console.log('connection established');
    connectSocket.write('Name: GDS');
  });

  // interpret incoming data as text
  connectSocket.setEncoding("utf8");
  connectSocket.on('data',(data) => console.log(data))
  return connectSocket;
};

module.exports = connect;