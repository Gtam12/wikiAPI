//jshint esversion:6



const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', ejs);
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://gowtham:gtam123@cluster0.0frbg.mongodb.net/wikiDb?retryWrites=true&w=majority"
, { useNewUrlParser: true, useUnifiedTopology: true });