import express from "express";
import { authenticateToken } from "../middleware/authenticateToken.js";
import { toUser } from "../models/users.js";
import { getUserById } from "../service/user.js";
var router = express.Router();

router.get('/details', authenticateToken, async (req, res) => {
    const user = req.user;
    const response = await getUserById(user.id);
    const data = toUser(response);
    console.log(data);
    res.send(data);
});

export default router;