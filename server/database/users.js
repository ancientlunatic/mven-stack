import mongoose from 'mongoose';

const auth = new mongoose.Schema({
    userName: String,
    password: String
});

const users = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    Profile: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: String,
        required: false
    },
    userName: {
        type: String,
        required: true
    }
});

const authModal =  mongoose.model("auth", auth);
const userModal = mongoose.model("users", users);

export {
    authModal,
    userModal
};