import express from "express";
import products from "./data/products.js";
import dotenv from 'dotenv'
import connectDB from "./config/db.js";
dotenv.config()

const port = process.env.PORT;

connectDB()

const app = express();

app.get('/api/products', (req,res)=>{
    res.send(products);
})

app.get('/api/products/:id', (req,res)=>{
    const product = (products.find((p)=>p._id === req.params.id));
    res.json(product);
})

app.listen(port, ()=> console.log(`Server running on Port:${port} in ${process.env.NODE_ENV}`))