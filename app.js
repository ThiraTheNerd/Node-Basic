// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     res.send("Hey whats up freom express")
// })

// app.listen(3000);

const fs = require('fs')
const fileName = "target.txt"
fs.readFile(fileName, (err, data) => {
    if (err){
        console.log(err)
    }
    console.log(data.toString());
});

console.log("Node js async programming ...?")