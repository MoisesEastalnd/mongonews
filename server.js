const express = require("express");
const mongojs = require("mongojs");
const mongoose = ("mongoose");

//scraping  tools 
const axios = require("axios");
const cheerio = ("cheerio");

//server port 
const PORT = 6000

const db = require("./models");

const app = express();


app.get("/", function(req,res){
  res.send("testing route...it works!!!");
});




app.listen(6000,function() {
console.log("App is running on port 6000!!!");
});
