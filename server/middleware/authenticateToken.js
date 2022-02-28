import { verifyToken } from "../service/jwt.js";

const authenticateToken = (req, res, next) => {
    const bearerToken = req.headers['authorization'];
    const token = bearerToken.split(' ')[1];
    if(token) {
        const response = verifyToken(token);
        if (!response.error) {
            req.user = response.data;
            res.append('authorization', token);
            next();
            return;
        }
    }
    res.status(401).send({
        message: "unauthorize request"
    });
}

export {
    authenticateToken
}