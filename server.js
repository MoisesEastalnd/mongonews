const express = require("express");

const mongoose = require("mongoose");

//scraping  tools 
const axios = require("axios");
const cheerio = ("cheerio");

//server port 
const PORT = process.env.PORT ||3000
const  MONGODB_URI = process.env || "mongodb://localhost/mongoHeadlines";
//const db = require("./models");

const app = express();

const databaseUrl = "scraper";
const collections = ["scapedData"];

 mongoose.connect("mongodb://localhost/scraper",{useNewUrlParser: true});
 mongoose.connect(MONGODB_URI);
//db.on("error", function(error) {
//console.log("Database Error:",error);
//});

//Route
app.get("/", function(req,res){
  res.send("testing route...it works!!!");
});

//Scraping Route
app.get("/", function(req,res) {
  //db.scrapedData.find({}, function (err,found) {
  // if (err) {
    // console.log (err);
  // }
  // else{
   //  res.json(found);
  // }
 res.send("hello");
});
//});



//server responces
app.listen(PORT,function() {
console.log("App is running on port 6000!!!");
});
