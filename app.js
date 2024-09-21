const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const connectMongodb = require("./init/mongodb");
const router = require("./routes/todo");


const app = express();

connectMongodb();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/", router);


app.set("view engine", "ejs");

module.exports= app;