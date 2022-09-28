export const authService = {
    login: () => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        if (!token && hash) {
            // @ts-ignore
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        return token
    },
    logout: ()=>{
        window.localStorage.removeItem("token")
        // @ts-ignore
        window.location="http://localhost:3000/"
    }
};

