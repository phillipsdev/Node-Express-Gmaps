const express = require("express");

const config = require("../config.js");
const placesRouter = require("./controllers/places.js");

const server = express();
const PORT = config.port;

server.use(placesRouter);

server.listen(PORT, err => {
  if (err) {
    console.log(`Error starting server: ${err}`);
  } else {
    console.log(`Server listening on port ${PORT}`);
  }
});
