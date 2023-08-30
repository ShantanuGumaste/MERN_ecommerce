import express from "express";
import productRoutes from "./routes/productRoutes.js";
import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/middleware.js";
dotenv.config()

const port = process.env.PORT;

connectDB()

const app = express();

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=> console.log(`Server running on Port:${port} in ${process.env.NODE_ENV}`))