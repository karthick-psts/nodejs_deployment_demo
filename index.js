const express = require('express');
const http = require('http');

const app = express();

app.get("/",(req, res) => {
    res.end("Sachin Tendulkar")
})


const server = http.createServer(app);

const PORT = 8080;

server.listen(PORT, () => {
    console.log("server is runnig")
})