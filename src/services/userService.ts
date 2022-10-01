import {getRequest} from "../helpers/request/requestUtils";

export const userService = {
    getUser: async () => {
        try {
            // @ts-ignore
            const {data} = await getRequest("https://api.spotify.com/v1/me")
            return data
        } catch (error: any) {
            console.log('error')
        }
    }
}