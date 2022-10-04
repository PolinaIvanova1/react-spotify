import {getRequest, deleteRequest} from "../helpers/request/requestUtils";

export const userService = {
    getUser: async () => {
        try {
            // @ts-ignore
            const {data} = await getRequest("https://api.spotify.com/v1/me")
            return data
        } catch (error: any) {
            console.log('error')
        }
    },
    getLikedSongs: async () => {
        try {
            // @ts-ignore
            const {data} = await getRequest("https://api.spotify.com/v1/me/tracks")
            return data
        } catch (error: any) {
            console.log('error')
        }
    },
    deleteLikedSongs: async (deleteIds: any[]) => {
        try {
            // @ts-ignore
            const {data} = await deleteRequest("https://api.spotify.com/v1/me/tracks", {
                data: {
                    ids: deleteIds
                }
            })
            return deleteIds
        } catch (error: any) {
            console.log('error')
        }
    }
}