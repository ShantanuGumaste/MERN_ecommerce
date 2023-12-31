import { asyncHandler } from "../middleware/middleware.js";
import Product from "../models/productModel.js";

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res)=>{
     const product = await Product.find({});
     res.json(product);
})

// @desc Fetch specific product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res)=>{
     const product = await Product.findById(req.params.id);

     if (product) {
       return res.json(product);
     } else {
       res.status(404);
       throw new Error("Product not Found");
     }
})

export { getProducts, getProductById };