const express = require("express");
const mongoose = ("mongoose");

//scraping  tools 
const axios = require("axios");
const cheerio = ("cheerio");

//server port 
const PORT = 6000

const db = require("./models");

const app = express();
