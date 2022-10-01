type InitState = any

const initialState: InitState = {}

export const trackReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SEARCH_TRACKS':
            // @ts-ignore
            return {...state, tracks: action.payload}
        default:
            return state
    }
}