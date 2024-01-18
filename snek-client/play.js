const net = require("net");
const connect = require('./client');
const {handleUserInput, setupInput} = require('./input');



const socket1 = connect();
setupInput(); //initialize stdin behaviour
handleUserInput(socket1);
console.log("Connecting ...");


