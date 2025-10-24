// konfiguracioni fajl

const express = require("express");
const app = express();
const routes = require("./routes"); // importovan samo folder(jer po defaultu uzima index.js)

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use(express.static(__dirname + "/public"));

// root
app.use("/", routes);
// app.use("/admin", routesAdmin);  ako imamo admina

app.listen(3000, function () {
  console.log("Listening port 3000");
});
