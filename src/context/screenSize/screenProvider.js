import React, { useReducer } from "react";
import ScreenContext from './screenContext'
import ScreenReducer from './screenReducer'
import { SET_SCREEN_SIZE } from '../types'

const ScreenProvider = props => {
    
    const initialState = {
        screen: ''
    }

    const [state,dispatch] = useReducer(ScreenReducer, initialState)

    // Screen sizes
    // xs = extraSmall
    // sm = small
    // md = medium
    // lg = large
    // xl = extraLarge
    
    const setScreenSize = screenSize => {
        dispatch({
            type: SET_SCREEN_SIZE,
            payload: screenSize
        })
    }

    return (
        <ScreenContext.Provider value={{
            screen: state.screen,
            setScreenSize
        }}>
            { props.children }
        </ScreenContext.Provider>
    )
}

export default ScreenProvider