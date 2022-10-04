export const searchArtists = () => {
    return {type: "SEARCH_ARTISTS"}
}
export const searchAlbums = () => {
    return {type: "SEARCH_ALBUMS"}
}
export const searchTracks = () => {
    return {type: "SEARCH_TRACKS"}
}

export const getToken = () => {
    return {type: "TOKEN"}
}

export const changeTheme = () => {
    return {type: "CHANGE_THEME"}
}

export const deleteTrack = () => {
    return {type: "DELETE_TRACK"}
}