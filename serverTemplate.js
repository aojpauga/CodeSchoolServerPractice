// Creating a new server
// Create server folder within project, and create server.js
// In terminal: go to the server folder
// npm init -y      ( this will give you the package.json file )
// In package.json: make sure "main" is set as "server.js"
// make sure you have the "start" script that runs "node server.js"
// Back in terminal: make sure you are still in the server folder
// npm install express
// npm install -D nodemon
// npm install cors
// OR npm install express cors; npm install -D nodemon
// In package.json: make sure those three installs appear in "dependencies" and "devDependencies"
// "dependencies": {
//     "cors": "^2.8.5",
//     "express": "^4.17.1"
// },
// "devDependencies": {
//     "nodemon": "^1.19.1"
// }
// create new script tag for nodemon: in "scripts" add "dev": "nodemon server.js"

const express = require("express");
const cors = require("cors");

var server = express();
var port = 8080;

// Middleware
server.use(express.urlencoded({
    extended: false
}));
server.use(cors());

// Start server
server.listen(port, function() {
    console.log(`Listening on port ${ port }`);
});