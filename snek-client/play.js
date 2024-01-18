const net = require("net");
const connect = require('./client');
const {handleUserInput, setupInput} = require('./input');



const socket1 = connect();//create connection between client and server + return established socket
setupInput(); //initialize stdin behaviour
handleUserInput(socket1); //send socket to function handling user input
console.log("Connecting ...");


