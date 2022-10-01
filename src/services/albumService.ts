import {getRequest} from "../helpers/request/requestUtils";

export const albumService = {
    getNewReleases: async () => {
        try {
            // @ts-ignore
            const {data} = await getRequest("https://api.spotify.com/v1/browse/new-releases", {
                params: {
                    market: "US"
                }
            })
            return data
        } catch (error: any) {
            console.log('error')
        }
    }
}