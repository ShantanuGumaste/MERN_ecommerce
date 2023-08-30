import  express  from "express";
const router = express.Router()
import { getProducts, getProductById } from "../controllers/productController.js";


// @desc Fetch specific product
// @route GET /api/products/:id
// @access Public

router.route('/').get(getProducts);

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.route("/:id").get(getProductById);


export default router