//server.js
const express = require("express");
const router = express.Router();
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
require("dotenv").config();
const routes = require("./routes");

app.use(favicon(__dirname + "/build/favicon.ico"));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/dbtest", function (req, res) {
  var sql = require("mssql");

  // config for your database
  var config = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
  };

  sql.connect(config, function (err) {
    if (err) res.send(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query("select * from Customers", function (err, recordset) {
      if (err) res.send(err);

      // send records as a response
      res.send(recordset);
    });
  });
});

app.get("/ping", function (req, res) {
  return res.send("pong");
});
//use routes to determine where to send user - looks at /routes/index.js
app.use("/", routes());

app.listen(port, () => {
  console.log("Server running on " + port);
});

//send a static file
/*
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});*/
