export const authService = {
    login: () => {
        const hash = window.location.hash

        if (hash) {
            // @ts-ignore
            const token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            // @ts-ignore
            const expiresIn = +hash.substring(1).split("&").find(elem => elem.startsWith("expires_in")).split("=")[1]

            const expireDate: number = Date.now() + (expiresIn * 1000);

            window.location.hash = ""
            window.localStorage.setItem("token", token)
            window.localStorage.setItem("expireDate", expireDate + "")

            return token
        }

        const token: string | null = window.localStorage.getItem("token")
        // @ts-ignore
        const expireDate = +window.localStorage.getItem("expireDate") || 0;

        if (token && Date.now() > expireDate) {
            authService.logout();
            return;
        }

        return token
    },
    logout: () => {
        window.localStorage.removeItem("token")
        // @ts-ignore
        window.location = "http://localhost:3000/"
    }
};