import  express  from "express";
import { deleteUser, followUser,getAllUser ,getUser, updateUser,UnFollowUser } from "../Controller/UserController.js";
import authMiddleWare from "../MiddleWare/authMiddleWare.js";


const router =express.Router();

router.get('/:id', getUser);
router.get('/',getAllUser)
router.put('/:id',authMiddleWare, updateUser)
router.delete('/:id',authMiddleWare, deleteUser)
router.put('/:id/follow',authMiddleWare, followUser)
router.put('/:id/unfollow',authMiddleWare, UnFollowUser)

export default router;