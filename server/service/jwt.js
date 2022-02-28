import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const createToken = (data) => {
    const secretKey =  process.env.JWT_SECRET;
    const acessToken = jwt.sign(data, secretKey, {expiresIn: '30m'});
    return acessToken;
}

const verifyToken = (token) => {
    try {
        const secretKey =  process.env.JWT_SECRET;
        const res =  jwt.verify(token, secretKey);
        return {
            data: res
        };
    } catch (error) {
        return {
            error: error
        }
    }
} 

export {
    createToken,
    verifyToken
}