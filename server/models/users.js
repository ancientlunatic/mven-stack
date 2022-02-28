const toUser = (user) => {
    return {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName
    }
}

export {
    toUser
}