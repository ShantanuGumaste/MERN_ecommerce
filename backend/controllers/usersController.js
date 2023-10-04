import { asyncHandler } from "../middleware/middleware.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

// @desc Auth user and get Token
// @route GET /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body; 
    
    const user = await User.findOne({ email });

    if(user && (await user.matchPassword(password))){

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, { expiresIn: '30d'});

    // Set the jwt in http-only cookie
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite:'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000
    })
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(401);
        throw new Error('Invalid Email or Password')
    }
});

// @desc Register User
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.json('register user');
});

// @desc Logout User
// @route GET /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie('jwt');
  res.status(200).json({ message: "Logged out successfully" });
});

// @desc get user profile
// @route GET /api/users/profile
// @access Public
const getUserProfile = asyncHandler(async (req, res) => {
  res.json('user profile');
});

// @desc update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.json('update user profile');
});

// @desc get users
// @route GET /api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.json('get users');
});

// @desc get users by id
// @route GET /api/users/:id
// @access Private/Admin
const getUsersById = asyncHandler(async (req, res) => {
  res.json('get users by id');
});

// @desc update users
// @route PUT /api/users/:id
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.json('update user');
});

// @desc delete users
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.json('delete user');
});

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUsersById, updateUser, deleteUser };
