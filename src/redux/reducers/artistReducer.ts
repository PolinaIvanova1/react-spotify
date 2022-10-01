type InitState = any

const initialState: InitState = {}

export const artistReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SEARCH_ARTISTS':
            // @ts-ignore
            return {...state, artists: action.payload}
        case 'ADD_USERS':

            return state
        default:
            return state
    }
}