const setToken = (token: string) => {
    const key = process.env.VUE_APP_TOKEN;
    localStorage.setItem(key, token);
}

const getToken = () => {
    const key = process.env.VUE_APP_TOKEN;
    return localStorage.getItem(key);
}

const clearData = () => {
    localStorage.clear();
}

export {
    setToken,
    getToken,
    clearData
}