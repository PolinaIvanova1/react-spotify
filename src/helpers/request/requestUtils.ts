import axios from "axios";

const getToken = () => {
    return window.localStorage.getItem("token")
}

export const getRequest = (url: string, config: any) => {
    if (!getToken()) {
        return
    }
    return axios.get(url, {
        ...config, headers: {
            Authorization: `Bearer ${getToken()}`
        },
    })
        .catch(error => {
            if (error?.response?.status === 401) {
                // @ts-ignore
                window.location = "http://localhost:3000"
            }
        })
}



