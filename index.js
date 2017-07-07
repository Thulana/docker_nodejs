// Load the http module to create an http server.
var http = require('http');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '172.17.0.2',
    user: 'root',
    database: 'orangehrm_mysql',
	password:'admin'
});
// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "application/json"});
  //text = "Running Node.js:" + process.versions.node
 // text += "Mongo Servers: " + process.env.MONGODB
	connection.query('show tables', function(err, rows, fields)
        {
                console.log('Connection result error '+err);
                console.log('no of records is '+rows.length);
                response.writeHead(200, { 'Content-Type': 'application/json'});
                response.end(JSON.stringify(rows));
                response.end();
        }); 

});

var port = process.env.PORT || 8080;
server.listen(port);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:" + port + "/");

