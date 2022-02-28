const callback = (err, data) => {
    if(err) {
        return {
            error: err,
        }
    } else {
        return {
            data: data
        }
    }
}

export {
    callback
}
