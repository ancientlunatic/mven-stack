import { userModal } from "../database/users.js"

const getUserById = async (id) => {
    try {
        const user = await userModal.findById(id);
        return user;
    } catch(error) {
        return {
            error: error,
        }
    }
};

const getUserByUserName = async (userName) => {
    try {
        const user = await userModal.findOne({userName: userName});
        return user;
    } catch(error) {
        return {
            error: error,
        }
    }
};


export {
    getUserById,
    getUserByUserName
}