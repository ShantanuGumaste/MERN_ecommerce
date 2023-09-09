import express from "express";
const router = express.Router()
import { authUser, deleteUser, getUserProfile, getUsers, getUsersById, logoutUser, registerUser, updateUser, updateUserProfile } from "../controllers/usersController.js";

router.route('/').post(registerUser).get(getUsers);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').delete(deleteUser).get(getUsersById).put(updateUser);

export default router