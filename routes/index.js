const express = require("express");
const router = express.Router();

const reactExperimentsRoute = require("./reactexperiments");

module.exports = (params) => {
  router.get("/hello", (request, response) => {
    console.log("Hello");
    response.send("Hello");
  });

  router.get("/goodbye", (request, response) => {
    console.log("Hello");
    response.send("Hello");
  });

  return router;
};
