// import dependencies
const express = require("express");
const ViteExpress = require("vite-express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// import routers:
const Router = require("./routes.js");

// init app
const app = express();

// config
const WEB_SERVER_PORT = 3000;
const MONGODB_DOMAIN = "127.0.0.1";
const MONGODB_SERVER_PORT = 27017;

// make sure to get json objects from post requests data
app.use(express.json());
app.use(bodyParser.json());

// using the imports in the application
// when url is localhost:3000/, the router is called
app.use("/api", Router);

// connect to local mongo DB function.
async function connectdb() {
  await mongoose.connect(`mongodb://${MONGODB_DOMAIN}:${MONGODB_SERVER_PORT}`);
}

// connect to mongodb (needs to be installed and running)
mongoose.set("strictQuery", false);
connectdb().catch((err) => console.log(err));

// start web-server
ViteExpress.listen(app, WEB_SERVER_PORT, () =>
  console.log(`Server is listening on port ${WEB_SERVER_PORT}...`)
);
