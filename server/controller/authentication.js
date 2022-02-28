import express from "express";
import { signIn, signUpUser } from '../service/authentication.js'
var router = express.Router();


router.post("/signin", async (req, res) => {
    const user = req.body;
    console.log(user);
    const response = await signIn(user);
    if(response.error) {
        res.status(401).send({
            error: response.error
        });
    }
    res.append('Authorization',response.token)
    res.append("Access-Control-Expose-Headers","Authorization")
    res.send(response.user);
});

router.post("/signup", async (req, res) => {
    const user = req.body;
    const msg = await signUpUser(user);
    res.send(msg);
});


export default router;
