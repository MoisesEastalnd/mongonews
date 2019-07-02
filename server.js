const express = require("express");
const mongoose = ("mongoose");

//scraping  tools 
const axios = require("axios");
const cheerio = ("cheerio");

//server port 
const PORT = 6000

const db = require("./models");

const app = express();


app.get("/", function(error){
  res.send("testing route...it works!!!");
});




app.listen(6000,function() {
console.log("App is running on port 6000!!!");
});
