//impport dependencies
const express = require("express");
const ViteExpress = require("vite-express");
const mongoose = require("mongoose");

//import routers:
const Router = require("./routes/serving.js");

//init app
const app = express();

//using the imports in the application
app.use("/", Router);


//debuging route-----------------------------
app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});
//-----------------------------------------

//connect to local mongo DB. (needs to be installed and running)
mongoose.set("strictQuery", false);
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017");
}

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
