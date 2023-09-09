import User from "../models/userModel.js";
import { asyncHandler } from "./middleware.js";
import jwt from 'jsonwebtoken';

// Protect Routes
 const protect = asyncHandler(async (req, res, next) => {
    let token;

    // read the jwt from cookie
    token = req.cookies.jwt;

    if (token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            await User.findById(decoded.userId).select('-password');
            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not Authorized, invalid token');
        }
    } else {
        res.status(401);
        throw new Error('Not Authorized, no token')
    }
});

// Admin Middleware
const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error('Not Authorized, not admin');
    }
}

export { protect, admin };