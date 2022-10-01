type InitState = any

const initialState: InitState = {}

export const themeReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case 'CHANGE_THEME':
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state
    }
}