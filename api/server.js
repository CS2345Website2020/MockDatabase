const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// import routers 


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

//custom middleware 
server.use(logger)


// use routers 


server.get('/', (req, res) => {
    res.send(`<h2>Welcome to the Mock Database!</h2>`)
});


// custom middleware 
function logger(req, res, next) {
    console.log(
        `[${new Date().toISOString()}] ${req.method} from ${req.url}`
    ); 

    next(); 
};  

module.exports = server; 