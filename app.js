const {sum} = require("./helpers");
const http = require('http')

const server = http.createServer((req, res) => {
    res.end("Hello world from Node js")
});
 
//Create server
server.listen(3000)
//Declare a variable
const total =sum (10 , 230);

console.log("TOTAL : ", total);
