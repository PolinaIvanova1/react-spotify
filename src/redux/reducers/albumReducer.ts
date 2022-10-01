type InitState = any

const initialState: InitState = {}

export const albumReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SEARCH_ALBUMS':
            // @ts-ignore
            return {...state, albums: action.payload}
        default:
            return state
    }
}