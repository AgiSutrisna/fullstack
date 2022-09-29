import express from "express";
import {
    getOrder, 
    postOrder,
    // createUser,
    // updateUser,
    // deleteUser
} from "../controller/formController.js";

const router = express.Router();

router.get('/form', getOrder);
router.post('/form', postOrder);
// router.get('/users/:id', getUserById);
// router.post('/users', createUser);
// router.patch('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);

export default router;