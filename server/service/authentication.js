import { authModal, userModal } from "../database/users.js"
import { validateUserModal, validateUserCredential } from "../validations/user.js"
import { callback } from "../utils.js/helper.js";
import crypto from "crypto";
import { createToken } from "./jwt.js";
import { getUserByUserName } from "./user.js";
import { toUser } from '../models/users.js';

const createNewUser = async (user, password) => {
    try {
        const cryptPass = encryptPassword(password);
        const newUser = await authModal.create({userName: user,
        password: cryptPass});
        if (newUser) {
            return true;
        } 
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}


const signIn = async (user) => {
    try {
        if(validateUserCredential(user)) {
            const cryptPass = encryptPassword(user.password);
            const response = await authModal.findOne({userName: user.userName, password: cryptPass});
            if (!response) {
                return {
                    error: "user not found"
                }
            } else {
                const userData = await getUserByUserName(response.userName);
                const token = createToken(toUser(userData))
                console.log(token);
                return {
                    token : token,
                    user: userData
                }
            }
        } 
        return {
            error: 'please enter full details'
        };
    } catch (error) {
        return {
            error: error
        }
    }
} 

const signUpUser = async (user) => {
    if (validateUserModal(user)) {
        const reponse = await createNewUser(user.userName, user.password);
        if (reponse) {
            await addUserDetails(user.firstName, user.lastName, user.dob, user.userName);
        }
        return {
            msg: 'successfully user created'
        };
    }
    return {
        error: 'please enter full details'
    };
}

const addUserDetails = async (firstName, lastName, dob, userName) => {
    try {
        const newUser = await userModal.create({firstName: firstName,
            lastName: lastName, 
            dob: dob,
            userName: userName });
        return true;
    } catch(error) {
        console.log(error);
        return false; 
    }
}

const encryptPassword = (password) => {
    const cryptPass = crypto.createHash('sha256').update(password).digest('hex');
    return cryptPass;
}

export {
    signUpUser,
    createNewUser,
    encryptPassword,
    signIn
}