const express = require("express");

const mongoose = require("mongoose");

//scraping  tools 
const axios = require("axios");
const cheerio = ("cheerio");

//server port 
const PORT = process.env.PORT ||3000
const  MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
//const db = require("./models");

const app = express();

const databaseUrl = "scraper";
const collections = ["scapedData"];

 
 mongoose.connect(MONGODB_URI);
//db.on("error", function(error) {
//console.log("Database Error:",error);
//});
//});
//Route
app.get("/", function(req,res){
  res.send("testing route...it works!!!");
});

//Website Scraping Route
app.get("/scrape", function(req,res) {
  //grsbbing the body of html with axios
  axios.get("").then(function(response){
    //loading body in cheerio and saving body to $ as shorthand selector
    const $ = cheerio.load(response.data);
    // grabbing everry h2  under the article tag
    $("").each(function(i,element){
      //saving an empty result object
      const result = {};

     //
      result.title = $(this)
      .children("a")
      .text();
      result.link = $(this)
      .children("a")
      .attr("href");

      db.Article.create(result)
      .then(function(db){
        console.log (db);
      })
      .catch(function(err){
        console.log (err);
      });
    });
    res.send("Scrap is Done");
  });
 
});

app.get("/articles", function(req,res){
  db.Article.find({})
  .then(function(db){
    res.json(db);
  })
  .catch(function(err){
    res.json(err);
  });
});




//server responces
app.listen(PORT,function() {
console.log("App is running on port 6000!!!");
});
