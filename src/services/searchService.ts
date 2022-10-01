import {getRequest} from "../helpers/request/requestUtils";

export const searchService = {
    searchArtists: async (searchKey: string) => {
        try {
            // @ts-ignore
            const {data} = await getRequest("https://api.spotify.com/v1/search", {
                params: {
                    q: searchKey,
                    type: "artist"
                }
            })
            return data.artists.items
        } catch (error: any) {
            console.log('error')
        }
    },
    searchAlbums: async (searchKey: string) => {
        try {
            // @ts-ignore
            const {data} = await getRequest("https://api.spotify.com/v1/search", {
                params: {
                    q: searchKey,
                    type: "album"
                }
            })
            return data.albums.items
        } catch (error: any) {
            console.log('error')
        }
    },
    searchTracks: async (searchKey: string) => {
        try {
            // @ts-ignore
            const {data} = await getRequest("https://api.spotify.com/v1/search", {
                params: {
                    q: searchKey,
                    type: "track"
                }
            })
            return data.tracks.items
        } catch (error: any) {
            console.log('error')
        }
    },
}