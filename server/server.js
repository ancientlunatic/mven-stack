import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authentication from './controller/authentication.js';
import user from './controller/user.js';
import connect from './database/initialize.js';
import { createToken } from "./service/jwt.js";


dotenv.config();
connect();
const app = express();
app.use(express.json());
const port = process.env.PORT

app.use(cors());
app.use('/auth', authentication);
app.use('/user', user);

app.get('/token', (req, res) => {
    const token = createToken({user: 'suraj'});
    res.send(token);
})



app.listen(port, () => {
    console.log(`app listening on ${port}`)
})