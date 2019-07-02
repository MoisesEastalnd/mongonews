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

const databaseUrl = "scraper";
const collections = ["scapedData"];

const db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
console.log("Database Error:",error);
});

//Route
app.get("/", function(req,res){
  res.send("testing route...it works!!!");
});

//Scraping Route
app.get("/", function(req,res) {
  db.scrapedData.find({}, function (err,found) {
   if (err) {
     console.log (err);
   }
   else{
     res.json(found);
   }
  });
});



//server responces
app.listen(6000,function() {
console.log("App is running on port 6000!!!");
});
