type InitState = any

const initialState: InitState = {}

export const trackReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SEARCH_TRACKS':
            // @ts-ignore
            return {...state, tracks: action.payload}
        case 'DELETE_TRACK':
            // @ts-ignore
            const deletedIds = action.payload
            const tracks = state.tracks
            tracks.filter((track: any) => deletedIds.includes(track.id))
            return {...state}
        default:
            return state
    }
}