const validateUserModal = (user) => {
    if(user.firstName && user.lastName && user.dob && validateUserCredential(user)) {
        return true;
    }
    return false;
}

const validateUserCredential = (user) => {
    if (user.password && user.userName) {
        return true;
    }
    return false;
}
export {
    validateUserModal,
    validateUserCredential
}