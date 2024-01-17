const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',// IP address here,
    port: '50541'// PORT number here,
  });
  conn.on('connect', stream => {
    console.log('connection established');
    conn.write('Name: GDS');

    
  });
  // conn.on('listening',() => {
  //   conn.write('Move:up');
  // })

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data',(data) => console.log(data))
  return conn;
};

module.exports = connect;