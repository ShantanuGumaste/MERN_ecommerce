import express from "express";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/middleware.js";
import cookieParser from "cookie-parser";
dotenv.config()

const port = process.env.PORT;

connectDB()

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Cookie parser middleware
app.use(cookieParser());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=> console.log(`Server running on Port:${port} in ${process.env.NODE_ENV}`))