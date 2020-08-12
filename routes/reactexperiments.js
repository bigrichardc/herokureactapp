const express = require("express");
const router = express.Router();

module.exports = (params) => {
  router.get("/", async (request, response) => {
    response.send("Hello experiments");
  });
  return router;
};
