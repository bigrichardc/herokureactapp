//server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
require('dotenv').config();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/dbtest', function (req, res) {

  var sql = require("mssql");

    // config for your database
    var config = {
        user: process.env.USER,
        password: process.env.PASSWORD,
        server: process.env.SERVER, 
        database: process.env.DATABASE 
    };

    sql.connect(config, function (err) {
    
      if (err) res.send(err);

      // create Request object
      var request = new sql.Request();
         
      // query to the database and get the records
      request.query('select * from Customers', function (err, recordset) {
        if (err) res.send(err)
        
        // send records as a response
        res.send(recordset);
        
        
      });
    });
});
app.get('/ping', function (req, res) {
  return res.send('pong');
 });
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(port);
console.log("Listening on " + port);