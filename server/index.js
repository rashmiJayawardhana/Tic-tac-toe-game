var Express = require("express");
var Mongoclient=require("mongodb").MongoClient;
var cors=require("cors");
const multer=require("multer");

var app=Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://rashmijayawardhana2001:1234Rashmi2001%23@cluster0.x4oxw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

var DATABASENAME="tic-tac-toe_game_db";
var database;

app.listen(5038,()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.db(DATABASENAME);
        console.log("Mongo DB Connection Successful");
    })
})