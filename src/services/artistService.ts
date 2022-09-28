import {getRequest} from "../helpers/request/requestUtils";

export const artistService = {
    getArtist: async (id: string) => {
        try {
            // @ts-ignore
            const {data} = await getRequest(`https://api.spotify.com/v1/artists/${id}`)
            return data
        } catch (error: any) {
            console.log('error')
        }
    },
    getTracks: async (id: string) => {
        try {
            // @ts-ignore
            const {data} = await getRequest(`https://api.spotify.com/v1/artists/${id}/top-tracks`, {
                params: {
                    market: "US"
                }
            })
            return data
        } catch (error: any) {
            console.log('error')
        }
    },
    getAlbums: async (id: string) => {
        try {
            // @ts-ignore
            const {data} = await getRequest(`https://api.spotify.com/v1/artists/${id}/albums `)
            return data
        } catch (error: any) {
            console.log('error')
        }
    },
}