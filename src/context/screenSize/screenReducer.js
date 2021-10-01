import { SET_SCREEN_SIZE } from '../types'

export default (state, action) => {
    switch (action.type) {
        case SET_SCREEN_SIZE:
            return {
                ...state,
                screen: action.payload
            }
        default:
            return state
    }
}