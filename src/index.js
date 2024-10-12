import mongoose from "mongoose";

import dotenv from "dotenv";
import connectDB from "./db/index.js";

import express from "express";


const app = express();

dotenv.config({
    path: './.env'
});
/*
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server running at port : ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("Mongo db connection failed!!", err);
    });

*/

//how to connect method 1
( async () =>{
    try{
        await mongoose.connect('${process.env.MONGODB_URL}/${DB_Name}')
        application.on("error" , (error) =>{
            console.log("ERR: " , error);
            throw error
        })
        app.listen(process.env.PORT , () =>{
            console.log('app is listning on port ${process.env.PORT}');
        })
    }catch(error){
        console.error("Error: ",error)
        throw error
    }
})






